import { DataService } from 'src/app/shared/data-fetch/data.service';
import { ActivatedRoute } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"
@Component({
    template: ''
})
export class BaseDetailComponent implements OnInit {
    public model: any
    public dataStructure: any[] = []
    public dataModel: any
    public currentId!: number | string
    constructor(
        public dataFetch: DataService,
        public route: ActivatedRoute,
        public snackBar: MatSnackBar
    ) { }

    public buildDataStructure(origin: any) {
        const kit : any[] = []
        Object.entries(origin).map((val:any) =>{
            if(val[1] != null && Object.entries(val[1]) && typeof val[1] == 'object')
            kit.push({
                label:val[0],
                group: this.buildDataStructure(val[1]),
            })
            else
            kit.push({
                label: val[0],
                value: val[1],
                type: 'text'
            })
        })
        return kit
    }


    ngOnInit() {
        this.route.params.subscribe(res => {
            this.currentId = res['id']
            if (this.currentId === 'new') {
                this.dataModel = this.model
                this.dataStructure = this.buildDataStructure(this.dataModel)
            } else {
                this.dataFetch.getDetail(res['id']).subscribe(res => {
                    this.dataModel = res
                    this.dataStructure = this.buildDataStructure(res)
                })
            }

        })
    }

    updateItem() {
        this.dataFetch.updateDetail(this.currentId, this.dataModel)
            .subscribe(
                res => {
                    this.dataModel = res
                    this.snackBar.open('funziato', 'chiudi')
                }
            )
    }

    deleteItem() {
        this.dataFetch.deleteDetail(this.currentId)
            .subscribe(
                res => {
                    this.dataModel = res
                }
            )
    }

    createItem() {
        this.dataFetch.addDetail(this.dataModel)
            .subscribe(
                res => {
                    this.dataModel = res
                }
            )
    }
}
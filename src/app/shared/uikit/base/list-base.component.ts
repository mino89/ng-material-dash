import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data-fetch/data.service";

@Component({
    template: ''
})
export class BaseListComponent implements OnInit{
  public data!: any[]
  public columns: string[] = []
  public names: string[] = []
  public root: any = ''
  constructor(public dataFetch: DataService) {

   }

  ngOnInit() {
    this.dataFetch.getList(100).subscribe((res: any[]) => {
      if(this.root){
        this.data = res[this.root]
      }else{
        this.data = res
      }
    })
  }
}

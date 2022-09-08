import { User, Address } from './../../../shared/models/user.model';
import { DataService } from './../../../shared/data-fetch/data.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dash-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dataStructure: any[] = []
  dataModel: any[] = []
  currentId!: number
  constructor(
    private dataFetch: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.currentId = res['id']
      this.dataFetch.getDetail(res['id']).subscribe(res => {
        this.dataModel = res
        this.dataStructure = [
          {
            label: 'id',
            value: res.id,
            type: 'text'
          },
          {
            label: 'age',
            value: res.age,
            type: 'number'
          },
          {
            label: 'telephone',
            value: res.phone,
            type: 'tel'
          },
          {
            label: 'email',
            value: res.email,
            type: 'email'
          },
          {
            label: 'Address',
            group: [
              {
                label: 'address',
                value: res.address.address,
                type: 'text'
              },
              {
                label: 'city',
                value: res.address.city,
                type: 'text'
              },
              {
                label: 'coordinates',
                group: [
                  {
                    label: 'lat',
                    value: res.address.coordinates.lat,
                    type: 'number'
                  },
                  {
                    label: 'lng',
                    value: res.address.coordinates.lng,
                    type: 'number'
                  },
                ]
              },
              {
                label: 'postalCode',
                value: res.address.postalCode,
                type: 'text'
              },
              {
                label: 'state',
                value: res.address.state,
                type: 'text'
              }
            ]
          }
        ]
      })
    })
  }


  updateItem() {
    this.dataFetch.updateDetail(this.currentId, this.dataModel)
      .subscribe(
        res => {
          console.log(res)
        }
      )
  }

}

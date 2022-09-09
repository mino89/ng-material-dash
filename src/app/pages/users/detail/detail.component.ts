import { User } from '../user.model';
import { UsersService } from './../users.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dash-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent implements OnInit {
  dataStructure: any[] = []
  dataModel: any
  currentId!: number | string
  constructor(
    private dataFetch: UsersService,
    private route: ActivatedRoute
  ) { }



  buildDataStructure(origin: any) {
    return [
      {
        label: 'age',
        value: origin.age,
        type: 'number'
      },
      {
        label: 'telephone',
        value: origin.phone,
        type: 'tel'
      },
      {
        label: 'email',
        value: origin.email,
        type: 'email'
      },
      {
        label: 'address',
        group: [
          {
            label: 'address',
            value: origin.company.address.address,
            type: 'text'
          },
          {
            label: 'city',
            value: origin.company.address.city,
            type: 'text'
          },
          {
            label: 'coordinates',
            group: [
              {
                label: 'lat',
                value: origin.address.coordinates.lat,
                type: 'number'
              },
              {
                label: 'lng',
                value: origin.address.coordinates.lng,
                type: 'number'
              },
            ]
          },
          {
            label: 'postalCode',
            value: origin.address.postalCode,
            type: 'text'
          },
          {
            label: 'state',
            value: origin.address.state,
            type: 'text'
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.currentId = res['id']
      if (this.currentId === 'new') {
        this.dataModel = new User()
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

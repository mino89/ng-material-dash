import { User } from '../user.model';
import { UsersService } from './../users.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseDetailComponent } from 'src/app/shared/uikit/base/detail-base.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'dash-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent extends BaseDetailComponent {
 
  constructor(
    dataFetch: UsersService,
    route: ActivatedRoute,
    snackBar: MatSnackBar
  ) {
    super(dataFetch, route, snackBar)
    this.model = new User()
  }

  // override buildDataStructure(origin: any) {
  //   return [
  //     {
  //       label: 'age',
  //       value: origin.age,
  //       type: 'number'
  //     },
  //     {
  //       label: 'telephone',
  //       value: origin.phone,
  //       type: 'tel'
  //     },
  //     {
  //       label: 'email',
  //       value: origin.email,
  //       type: 'email'
  //     },
  //     {
  //       label: 'address',
  //       group: [
  //         {
  //           label: 'address',
  //           value: origin.company.address.address,
  //           type: 'text'
  //         },
  //         {
  //           label: 'city',
  //           value: origin.company.address.city,
  //           type: 'text'
  //         },
  //         {
  //           label: 'coordinates',
  //           group: [
  //             {
  //               label: 'lat',
  //               value: origin.address.coordinates.lat,
  //               type: 'number'
  //             },
  //             {
  //               label: 'lng',
  //               value: origin.address.coordinates.lng,
  //               type: 'number'
  //             },
  //           ]
  //         },
  //         {
  //           label: 'postalCode',
  //           value: origin.address.postalCode,
  //           type: 'text'
  //         },
  //         {
  //           label: 'state',
  //           value: origin.address.state,
  //           type: 'text'
  //         }
  //       ]
  //     }
  //   ]
  // }
}

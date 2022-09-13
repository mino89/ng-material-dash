import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BaseDetailComponent } from 'src/app/shared/uikit/base/detail-base.component';
import { User } from '../../users/user.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'dash-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends BaseDetailComponent {
 
  constructor(
    dataFetch: ProductsService,
    route: ActivatedRoute,
    snackBar: MatSnackBar
  ) {
    super(dataFetch, route, snackBar)
    this.model = []
  }
}

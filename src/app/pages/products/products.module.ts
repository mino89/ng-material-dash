import { UikitModule } from './../../shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailComponent
  ],
  imports: [
    UikitModule,
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers:[
    ProductsService,
  ]
})
export class ProductsModule { }

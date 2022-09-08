import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { UikitModule } from './../../shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    UsersComponent,
    DetailComponent
  ],
  imports: [
    UikitModule,
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }

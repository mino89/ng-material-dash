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
    UsersRoutingModule
  ]
})
export class UsersModule { }

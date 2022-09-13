import { SidenavLayoutService } from './sidenav-layout/sidenav-layout.service';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataGroupComponent } from './data-group/data-group.component';
import { BaseDetailComponent } from './base/detail-base.component';
import { BaseListComponent } from './base/list-base.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent,
    NavItemComponent,
    DetailComponent,
    DataGroupComponent,
    BaseDetailComponent,
    BaseListComponent,
  ],
  exports:[ 
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent,
    DetailComponent,
    DataGroupComponent,
    BaseDetailComponent,
    BaseListComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    SidenavLayoutService
  ]
})
export class UikitModule { }

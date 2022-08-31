import { SidenavLayoutService } from './sidenav-layout/sidenav-layout.service';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent,
    NavItemComponent,
    DetailComponent,
  ],
  exports:[ 
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    SidenavLayoutService
  ]
})
export class UikitModule { }

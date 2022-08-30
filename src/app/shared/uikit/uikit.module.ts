import { SidenavLayoutService } from './sidenav-layout/sidenav-layout.service';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent
  ],
  exports:[ 
    HeaderComponent,
    ListComponent,
    SidenavLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers:[
    SidenavLayoutService
  ]
})
export class UikitModule { }

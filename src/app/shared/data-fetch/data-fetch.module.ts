import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers:[
    DataService
  ]
})
export class DataFetchModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/data-fetch/data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends DataService {
  apiPath = environment.apiPaths.Products
  constructor(
    http: HttpClient
  ) { super(http) }
}

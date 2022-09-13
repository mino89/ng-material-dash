import { BaseListComponent } from './../../shared/uikit/base/list-base.component';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'dash-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseListComponent {
  constructor(
    dataFetch: ProductsService) {
    super(dataFetch)
    this.columns = [
      'title', 'description', 'price', 'discountPercentage', 'rating', 'stock', 'actions'
    ]
    this.names = [
      'titolo', 'descrizione', 'prezzo', 'sconto', 'rating', 'magazzion', 'azioni'
    ]
    this.root = 'products'
  }

}

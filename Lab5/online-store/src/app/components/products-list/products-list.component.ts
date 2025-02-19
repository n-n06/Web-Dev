import { Component, OnInit, Signal, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products/products.service';
import { Product } from './products.models';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products! : any[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  } 

}

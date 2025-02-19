import { Component, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products/products.service';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products = ProductsService.instance.getProducts()
}

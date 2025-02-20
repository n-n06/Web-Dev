import { Component, OnInit, Signal, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products/products.service';
import { Product } from './products.models';
import { Category } from '../category/category.enum';
import { CategoryService } from '../../services/category/category.service';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products! : any[];

  constructor(private productsService: ProductsService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loadProducts();

    this.categoryService.selectedCategory$.subscribe((category) => {
      if (category) {
        this.filterByCategory(category);
      } else {
        this.loadProducts(); // Show all products if no category selected
      }
    });
  }

  loadProducts() {
    this.productsService.getProducts()
    .subscribe(res => {
      this.products = res;
    });
  }

  filterByCategory(category: Category) {
    this.productsService.filterProducts(category).subscribe(filteredProducts => {
      this.products = filteredProducts;
      console.log('filtering1')
    });
  } 

  handleDelete(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}

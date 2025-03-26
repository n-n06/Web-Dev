import { Component, inject, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products/products.service';
import { Category } from '../category/category.enum';
import { CategoryService } from '../../services/category/category.service';
import { ProductFront } from './products.models';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products! : ProductFront[];

  productsService = inject(ProductsService);
  categoryService = inject(CategoryService);



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

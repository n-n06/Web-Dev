import { Injectable, Signal } from '@angular/core';
import productsList from '../../../../products.json';
import { signal } from '@angular/core';
import { Product } from '../../components/products-list/products.models';
import { Category } from '../../components/category/category.enum';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static instance: ProductsService = new ProductsService();
  mappedProductsList: Product[];

  private constructor() { 
    this.mappedProductsList = productsList.map(p => ({
      ...p, category: p.category as Category
    }));
  }

  public getProducts() : Signal<Product[]>;

  getProducts() {
    return signal(this.mappedProductsList);
  }

  saveProducts() {
    
  }
}

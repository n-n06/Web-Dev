import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, ProductFront } from '../../components/products-list/products.models';
import { Category } from '../../components/category/category.enum';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'http://localhost:8000/api/products/';

  http = inject(HttpClient);

  public getProducts(): Observable<ProductFront[]> {
    return this.http.get<ProductFront[]>(this.apiUrl).pipe(
      map(products => {
        return products.map(product => ({
          ...product,
          category: Object.values(Category)[product.category - 1] as Category
        }))
      }
      )
    );
  }

  public patchProductsLikes(id: number, likeAmount: number) {
    const res = this.http.patch(this.apiUrl + `${id}/`, {
      number_of_likes: likeAmount
    }, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    })
    return res;
  }

  public filterProducts(category: Category) {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === category))
    );
  }

  public deleteProduct(id: number) {
    const res = this.http.delete(this.apiUrl + `${id}/`, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    });
    return res;
  }

}

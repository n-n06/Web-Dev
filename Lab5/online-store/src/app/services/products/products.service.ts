import { Injectable, Signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../components/products-list/products.models';
import { Category } from '../../components/category/category.enum';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'http://localhost:5000/products/';

  constructor(
    private http: HttpClient,
  ) { 
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => {
        return products.map(product => ({
          ...product,
          category: product.category as Category  
        }))
      }
      )
    );
  }

  public patchProductsLikes(id: number, likeAmount: number) {
    return this.http.patch(this.apiUrl + `${id}`, {
      amount: likeAmount
    })
  }

  public deleteProduct(id: number) {
    const res = this.http.delete(this.apiUrl + `${id}`);
    console.log(res);
    return res;
  }

}

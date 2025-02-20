import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products-list/products.models';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RatingPipe } from '../../pipes/rating.pipe';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { LikeButtonComponent } from "../like-button/like-button.component";
import { ProductsService } from '../../services/products/products.service';



@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RatingPipe, PrimaryButtonComponent, NgOptimizedImage, LikeButtonComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  encodeProductURI(uri: string) { //wrapper method - sorry did not come up with a smarter way
    return encodeURIComponent(uri);
  }

  constructor(private productService: ProductsService) {}

  @Input({required: true}) product! : Product;

  updateLikes(newValue : number) {
    this.product.likes = newValue;
    this.productService.patchProductsLikes(this.product.id, 1)
      .subscribe(res => {
        console.log('PATCH Successful!');
      });
  }

  @Output() delete = new EventEmitter<number>();

  deleteProduct() {
    this.delete.emit(this.product.id); // Emit the product ID to the parent
  }

  // deleteProduct() {
  //   this.productService.deleteProduct(this.product.id)
  //     .subscribe(res => {
  //       console.log('DELETE Successful!');
  //     });
  // }

}

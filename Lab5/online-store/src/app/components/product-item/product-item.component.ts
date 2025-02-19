import { Component, Input } from '@angular/core';
import { Product } from '../products-list/products.models';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RatingPipe } from '../../pipes/rating.pipe';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RatingPipe, PrimaryButtonComponent, NgOptimizedImage],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  encodeProductURI(uri: string) { //wrapper method - sorry did not come up with a smarter way
    return encodeURIComponent(uri);
  }

  @Input({required: true}) product! : Product;

}

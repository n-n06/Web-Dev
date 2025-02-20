import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../../components/category/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySubject = new BehaviorSubject<Category | null>(null);
  selectedCategory$ = this.categorySubject.asObservable();

  selectCategory(category: Category) {
    this.categorySubject.next(category);
  }

  constructor() { }
}

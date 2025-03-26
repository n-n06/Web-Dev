import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../../components/category/category.enum';
import { HttpClient } from '@angular/common/http';
import { CategoryInterface } from '../../components/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySubject = new BehaviorSubject<Category | null>(null);
  selectedCategory$ = this.categorySubject.asObservable();

  apiUrl: string = 'http://localhost:8000/api/categories/';
  http = inject(HttpClient);

  selectCategory(category: Category) {
    this.categorySubject.next(category);
  }

  getCategories() {
    return this.http.get<CategoryInterface[]>(this.apiUrl);
  }

  constructor() { }
}

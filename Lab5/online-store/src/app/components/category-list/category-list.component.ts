import { Component, inject } from '@angular/core';
import { Category } from '../category/category.enum';
import { CategoryService } from '../../services/category/category.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categoryService = inject(CategoryService);
  categories = Object.values(Category).slice(0, 4) as Category[];

  selectCategory(category: Category) {
    this.categoryService.selectCategory(category);
  }
}

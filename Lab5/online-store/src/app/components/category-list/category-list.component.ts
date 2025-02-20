import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../category/category.enum';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
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
  categories = Object.values(Category) as Category[];

  constructor(private categoryService: CategoryService) {

  }

  selectCategory(category: Category) {
    this.categoryService.selectCategory(category);
  }
}

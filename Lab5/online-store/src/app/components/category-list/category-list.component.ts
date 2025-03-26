import { Component, inject } from '@angular/core';
import { Category } from '../category/category.enum';
import { CategoryService } from '../../services/category/category.service';
import { CategoryComponent } from '../category/category.component';
import { CategoryInterface } from '../category/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categoryService = inject(CategoryService);
  categories !: CategoryInterface[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      result => {
        this.categories = result
      }
    );
  }

  

  selectCategory(category: Category) {
    this.categoryService.selectCategory(category);
  }
}

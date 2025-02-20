import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from './category.enum';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() label !: string;
  @Output() categorySelectEvent = new EventEmitter<string>();

  handleButtonClick() {
    this.categorySelectEvent.emit(this.label);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {
  isHovered = false;
  @Input() likes: number = 0;
  @Input() productId: number = 0;
  @Output() likesChanged = new EventEmitter<number>();

  updateLikes(event: any) {
    this.likesChanged.emit(++this.likes);
  }

  constructor() {

  }


}

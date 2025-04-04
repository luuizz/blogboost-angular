import { Component, Input } from '@angular/core';
import { CaptionComponent } from '@components/caption/caption.component';
import { CommonModule } from '@angular/common';
import { Post } from '@shared/interfaces/post.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-post',
  imports: [CaptionComponent, CommonModule],
  templateUrl: './item-post.component.html',
  styleUrl: './item-post.component.scss',
  standalone: true,
})
export class ItemPostComponent {
  @Input() post!: Post;
}

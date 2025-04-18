import { Component, Input } from '@angular/core';
import { CaptionComponent } from '@components/caption/caption.component';
import { CommonModule } from '@angular/common';
import { Post } from '@shared/interfaces/post.interface';
import { NgOptimizedImage } from '@angular/common';
import { RelatedPost } from '@shared/interfaces/relatedPosts';

@Component({
  selector: 'app-item-post',
  imports: [CaptionComponent, CommonModule, NgOptimizedImage],
  templateUrl: './item-post.component.html',
  styleUrl: './item-post.component.scss',
  standalone: true,
})
export class ItemPostComponent {
  @Input() post!: RelatedPost;

  calculateReadingTime(html: string): string {
    const words = html.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min de leitura`;
  }
}

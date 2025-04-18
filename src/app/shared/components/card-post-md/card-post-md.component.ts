import { Component, Input } from '@angular/core';
import { CaptionComponent } from "@components/caption/caption.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RelatedPost } from '@shared/interfaces/relatedPosts';

@Component({
  selector: 'app-card-post-md',
  imports: [CaptionComponent, NgOptimizedImage, CommonModule],
  templateUrl: './card-post-md.component.html',
  styleUrl: './card-post-md.component.scss'
})
export class CardPostMdComponent {
  @Input() post!: RelatedPost;

  getReadingTime(html: string): string {
    const words = html.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min de leitura`;
  }
}

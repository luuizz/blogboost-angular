import { Component, Input } from '@angular/core';
import { CaptionComponent } from '@components/caption/caption.component';
import { NgOptimizedImage } from '@angular/common';
import { RelatedPost } from '@shared/interfaces/relatedPosts';

@Component({
  selector: 'app-item-post-lg',
  imports: [CaptionComponent, NgOptimizedImage],
  templateUrl: './item-post-lg.component.html',
  styleUrl: './item-post-lg.component.scss',
})
export class ItemPostLgComponent {
  @Input() post!: RelatedPost;

  get readingTime(): string {
    const words = this.post?.conteudoPost?.[0]?.html?.trim().split(/\s+/).length || 0;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min de leitura`;
  }

  get formattedDate(): string {
    return new Date(this.post.createdAt).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
    });
  }
}

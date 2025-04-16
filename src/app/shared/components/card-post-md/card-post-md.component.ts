import { Component, Input } from '@angular/core';
import { CaptionComponent } from "../../../components/caption/caption.component";
import { Post } from '@shared/interfaces/post.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-post-md',
  imports: [CaptionComponent, NgOptimizedImage],
  templateUrl: './card-post-md.component.html',
  styleUrl: './card-post-md.component.scss'
})
export class CardPostMdComponent {
  @Input() post!: Post;
}

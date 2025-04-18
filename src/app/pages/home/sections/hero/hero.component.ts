import { Component, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { CaptionComponent } from '@components/caption/caption.component';
import { ItemPostComponent } from './item-post/item-post.component';
import { CommonModule } from '@angular/common';
import { ItemPostLgComponent } from './item-post-lg/item-post-lg.component';
import { RelatedPost } from '@shared/interfaces/relatedPosts';
import { getLatestPosts } from 'utils/hygraph';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    GridComponent,
    CaptionComponent,
    ItemPostComponent,
    CommonModule,
    ItemPostLgComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  featuredPost!: RelatedPost;
  recentPosts: RelatedPost[] = [];

  async ngOnInit() {
    const posts = await getLatestPosts();
    if(posts.length) {
      this.featuredPost = posts[0];
      this.recentPosts = posts.slice(1,4);
    }
  }

}

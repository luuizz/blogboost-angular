import { Component, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { CardPostMdComponent } from "@shared/components/card-post-md/card-post-md.component";
import { Post } from '@shared/interfaces/post.interface';
import { getAllPosts } from 'utils/hygraph';
import { RelatedPost } from '@shared/interfaces/relatedPosts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  imports: [GridComponent, CardPostMdComponent, CommonModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
})
export class AllPostsComponent implements OnInit {
  allPosts: RelatedPost[] = [];
  visiblePosts: RelatedPost[] = [];
  loadStep = 6;
  currentIndex = 0;

  async ngOnInit() {
    try {
      const data = await getAllPosts();


      this.allPosts = data.slice(4);
      this.visiblePosts = this.allPosts.slice(0, this.loadStep);
      this.currentIndex = this.loadStep;
    } catch (err) {
      console.error('Erro ao buscar todos os posts', err);
    }
  }

  loadMore() {
    const nextBatch = this.allPosts.slice(this.currentIndex, this.currentIndex + this.loadStep);
    this.visiblePosts = [...this.visiblePosts, ...nextBatch];
    this.currentIndex += this.loadStep;
  }

  get isMoreToLoad(): boolean {
    return this.currentIndex < this.allPosts.length;
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { GridComponent } from "@components/grid/grid.component";
import { getRelatedPosts } from 'utils/hygraph';
import { RelatedPost } from '@shared/interfaces/relatedPosts';
import { CardPostMdComponent } from "@shared/components/card-post-md/card-post-md.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-related',
  imports: [GridComponent, CommonModule],
  templateUrl: './post-related.component.html',
  styleUrl: './post-related.component.scss'
})
export class PostRelatedComponent implements OnInit {
  @Input() slugAtual: string = '';
  @Input() categoriaSlug: string = '';
  readingTime: string = '';

  relatedPosts: RelatedPost[] = [];



  async ngOnInit() {
    if (!this.slugAtual || !this.categoriaSlug) return;
  
    try {
      const data = await getRelatedPosts(this.slugAtual, this.categoriaSlug);
  
      this.relatedPosts = data.map(item => ({
        ...item,
        readingTime: this.calculateReadingTime(item.conteudoPost[0].html || '')
      }));
    } catch (err) {
      console.error('Erro ao buscar posts relacionados', err);
    }
  }

  calculateReadingTime(html: string): string {
    const words = html.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 100);
    return `${minutes} min de leitura`;
  }
}

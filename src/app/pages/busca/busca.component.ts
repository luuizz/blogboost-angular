import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelatedPost } from '@shared/interfaces/relatedPosts';
import { getAllPosts } from 'utils/hygraph';
import { CardPostMdComponent } from "../../shared/components/card-post-md/card-post-md.component";
import { CommonModule } from '@angular/common';
import { GridComponent } from "../../components/grid/grid.component";
import { NoResultsComponent } from "./no-results/no-results.component";

@Component({
  selector: 'app-busca',
  imports: [CardPostMdComponent, CommonModule, GridComponent, NoResultsComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class BuscaComponent implements OnInit {
  query: string = '';
  resultados: RelatedPost[] = [];
  allPosts: RelatedPost[] = [];
  termoDeBusca: string = '';

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.query = params['q'] || '';
      console.log('Termo pesquisado:', this.query);

      if (this.query) {
        this.allPosts = await getAllPosts();
        this.resultados = this.allPosts.filter(post =>
          post.titulo.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    });
  }

}

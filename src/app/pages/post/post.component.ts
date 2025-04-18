import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gql } from 'graphql-request';
import { hygraph } from 'utils/hygraph';
import { PostResponse } from '@shared/interfaces/postResponse';
import { GridComponent } from "../../components/grid/grid.component";
import { CaptionComponent } from "../../components/caption/caption.component";
import { PostHeaderActionsComponent } from "./post-header-actions/post-header-actions.component";
import { PostMetaComponent } from "./post-meta/post-meta.component";
import { PostShareUrlComponent } from "./post-share-url/post-share-url.component";
import { PostTopicsComponent } from "./post-topics/post-topics.component";
import { PostRelatedComponent } from "./post-related/post-related.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, GridComponent, PostHeaderActionsComponent, CaptionComponent, PostMetaComponent, PostShareUrlComponent, PostTopicsComponent, PostRelatedComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  titulo: string | null = null;
  slug: string | null = null;
  readingTime: number = 0;
  isLoading = true;
  post!: PostResponse['post'];
  @ViewChild('postContent', { static: false }) postContentRef!: ElementRef;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    if (!this.slug) {
      this.isLoading = false;
      return;
    }

      if (this.slug) {
        const query = gql`
        query GetPost($slug: String!) {
          post(where: { slug: $slug }) {
            slug
            titulo
            createdAt 
            conteudoPost {
              html
              text
            }
          imagemDestacada {
              width
              height
              url(transformation: {document: {output: {format: webp}}})
            }
          categoria {
              nomeDaCategoria
              slug
            }
          }
        }
      `;

      try {
        const data = await hygraph.request<PostResponse>(query, { slug: this.slug });
        this.post = data.post;
        this.readingTime = this.calculateReadingTime(this.post.conteudoPost[0].html || '');
        this.cdr.detectChanges();
      } catch (e) {
        console.error('Erro ao carregar post', e);
      } finally {
        this.isLoading = false;
      }
    }
  }

  calculateReadingTime(text: string): number {
    const words = text.trim().split(/\s+/).length;

    return Math.ceil(words / 200);
  }
}

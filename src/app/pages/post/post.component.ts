import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private titleService: Title,
    private metaService: Meta
  ) {}

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
          seo {
                title
                metaDescription
                metaKeywords
                ogShare {
                  url(transformation: {document: {output: {format: webp}}})
                  width
                  height
                }
            }
          }
        }
      `;

      try {
        const data = await hygraph.request<PostResponse>(query, { slug: this.slug });
        this.post = data.post;
        this.readingTime = this.calculateReadingTime(this.post.conteudoPost[0].html || '');
        this.setSeo();
        this.cdr.detectChanges();
      } catch (e) {
        console.error('Erro ao carregar post', e);
      } finally {
        this.isLoading = false;
      }
    }
  }

  setSeo() {
    if(!this.post) return;

    this.titleService.setTitle(`Blogboost | ${this.post.seo.title}`);
    this.metaService.updateTag({
      name: 'description',
      content: this.post.seo.metaDescription
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: this.post.seo.metaKeywords
    })
    this.metaService.updateTag({
      property: 'og:title',
      content: this.post.seo.title || 'Título padrão de post'
    })
    this.metaService.updateTag({
      property: 'og:description',
      content: this.post.seo.metaDescription
    })
    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    })
    this.metaService.updateTag({
      property: 'og:url',
      content: `https://blogboost-angular.vercel.app/post/${this.post.slug}`
    })
    this.metaService.updateTag({
      name: 'author',
      content: 'Luiz Ricardo'
    })
    this.metaService.updateTag({ property: 'og:image', content: this.post.imagemDestacada.url });
    this.metaService.updateTag({ property: 'og:image:width', content: String(this.post.imagemDestacada.width) });
    this.metaService.updateTag({ property: 'og:image:height', content: String(this.post.imagemDestacada.height) });
  }

  calculateReadingTime(text: string): number {
    const words = text.trim().split(/\s+/).length;

    return Math.ceil(words / 200);
  }
}

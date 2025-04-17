import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-share-url',
  imports: [NgOptimizedImage],
  templateUrl: './post-share-url.component.html',
  styleUrl: './post-share-url.component.scss'
})
export class PostShareUrlComponent {
  @Input() titulo: string = '';
  @Input() slug: string = '';
  icon: string = '';

  baseUrl = '';

  ngOnInit() {
    this.baseUrl = window.location.hostname.includes('localhost')
      ? 'http://localhost:4200/post/'
      : 'https://blogboost-angular.vercel.app/post/';
  }

  redes = [
    {
      nome: 'Facebook',
      link: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: 'logo-facebook.svg',
    },
    {
      nome: 'Twitter',
      link: (url: string, titulo: string) =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(titulo)}&url=${encodeURIComponent(url)}`,
      icon: 'logo-twitter.svg',
    },
    {
      nome: 'LinkedIn',
      link: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: 'logo-linkedin.svg',
    }
  ];

  get fullUrl(): string {
    return `${this.baseUrl}${this.slug}`;
  }
}

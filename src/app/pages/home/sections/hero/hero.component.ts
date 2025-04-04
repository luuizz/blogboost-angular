import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { CaptionComponent } from '@components/caption/caption.component';
import { ItemPostComponent } from './item-post/item-post.component';
import { CommonModule } from '@angular/common';
import { Post } from '@shared/interfaces/post.interface';
import { ItemPostLgComponent } from './item-post-lg/item-post-lg.component';

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
export class HeroComponent {
  posts: Post[] = [
    {
      image: '/image-post-xs-01.jpg',
      alt: 'Imagem do primeiro post',
      category: 'tecnologia',
      title: 'Você fica inseguro(a) na hora de escrever?',
      date: '16, Fev',
      readingTime: '12min de leitura',
      link: '#',
    },
    {
      image: '/image-post-xs-02.jpg',
      alt: 'Imagem do segundo post',
      category: 'tecnologia',
      title: 'Você fica inseguro(a) na hora de escrever?',
      date: '16, Fev',
      readingTime: '12min de leitura',
      link: '#',
    },
    {
      image: '/image-post-xs-03.png',
      alt: 'Imagem do terceiro post',
      category: 'tecnologia',
      title: 'Você fica inseguro(a) na hora de escrever?',
      date: '16, Fev',
      readingTime: '12min de leitura',
      link: '#',
    },
  ];
}

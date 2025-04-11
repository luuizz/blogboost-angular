import { Component } from '@angular/core';
import { GridComponent } from '../../../../components/grid/grid.component';
import { ItemPostLgComponent } from "../hero/item-post-lg/item-post-lg.component";
import { CardPostMdComponent } from "../../../../shared/components/card-post-md/card-post-md.component";
import { Post } from '@shared/interfaces/post.interface';

@Component({
  selector: 'app-all-posts',
  imports: [GridComponent, CardPostMdComponent],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
})
export class AllPostsComponent {
  postsRecentes: Post[] = [
    {
      title: 'Realidade virtual: Entendendo a tecnologia',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-01.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
    {
      title: 'Você fica inseguro(a) na hora de escrever?',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-02.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
    {
      title: 'React Native Weekend - 21’ na minha visão',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-03.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
    {
      title: 'Como ir além apenas das linhas de código?',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-04.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
    {
      title: 'Como ir além apenas das linhas de código?',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-05.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
    {
      title: 'Você fica inseguro(a) na hora de escrever?',
      date: '16, Fev',
      readingTime: '12min',
      category: 'Tecnologia',
      image: '/img-post-topic-06.jpg',
      alt: 'Imagem do post',
      link: '#',
    },
  ];
}

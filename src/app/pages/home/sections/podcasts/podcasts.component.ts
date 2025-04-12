import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GridComponent } from "@components/grid/grid.component";
import { CardPodcastsComponent } from "./card-podcasts/card-podcasts.component";
import { addIdsToArray } from 'app/utils/id.util';
import { Podcast } from '@shared/interfaces/podcast.interface';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
register();

@Component({
  selector: 'app-podcasts',
  imports: [GridComponent, CardPodcastsComponent],
  templateUrl: './podcasts.component.html',
  styleUrl: './podcasts.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PodcastsComponent implements AfterViewInit {
  podcasts: Podcast[] = [];

  constructor() {
    this.podcasts = addIdsToArray([
      {
        image: '/img-podcast-01.jpg',
        alt: 'Imagem do podcast',
        title: 'Realidade virtual: Entendendo a tecnologia',
        link: '#',
        readingTime: '12min',
        episode: 1
      },
      {
        image: '/img-podcast-02.jpg',
        alt: 'Imagem do podcast',
        title: 'Realidade virtual: Entendendo a tecnologia',
        link: '#',
        readingTime: '12min',
        episode: 2
      },
      {
        image: '/img-podcast-03.jpg',
        alt: 'Imagem do podcast',
        title: 'Realidade virtual: Entendendo a tecnologia',
        link: '#',
        readingTime: '12min',
        episode: 3
      },
      {
        image: '/img-podcast-04.jpg',
        alt: 'Imagem do podcast',
        title: 'Realidade virtual: Entendendo a tecnologia',
        link: '#',
        readingTime: '12min',
        episode: 4
      },
      {
        image: '/img-podcast-04.jpg',
        alt: 'Imagem do podcast',
        title: 'Realidade virtual: Entendendo a tecnologia',
        link: '#',
        readingTime: '12min',
        episode: 5
      },
    ]);
  }

  ngAfterViewInit() {
    const slidePodcast = new Swiper('.slide-podcast', {
      slidesPerView: 4,
      spaceBetween: 32,
      pagination: {
        el: '.s-podcast .top .ctrl-slide .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.s-podcast .top .btn-next',
        prevEl: '.s-podcast .top .btn-prev',
      },
      speed: 600,
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.1,
        },
        991: {
          slidesPerView: 2.5,
        },
        1100: {
          slidesPerView: 3.5,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }
}

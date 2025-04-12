import { Component, Input } from '@angular/core';
import { Podcast } from '@shared/interfaces/podcast.interface';

@Component({
  selector: 'app-card-podcasts',
  templateUrl: './card-podcasts.component.html',
  styleUrl: './card-podcasts.component.scss'
})
export class CardPodcastsComponent {
  @Input() podcast!: Podcast;
}

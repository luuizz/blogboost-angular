import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AllPostsComponent } from './sections/all-posts/all-posts.component';
import { PodcastsComponent } from './sections/podcasts/podcasts.component';
import { PlaylistsComponent } from "./sections/playlists/playlists.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AllPostsComponent, PodcastsComponent, PlaylistsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

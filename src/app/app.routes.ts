import { Routes, RouterModule, provideRouter } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationConfig } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post/:slug',
    component: PostComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

export class AppRountingModule {}

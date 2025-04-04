import { Routes, RouterModule, provideRouter } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'post/:slug',
  //   component: PostComponent,
  // },
];

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)],
// };

// export class AppRountingModule {}

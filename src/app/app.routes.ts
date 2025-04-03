import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

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

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRountingModule {}

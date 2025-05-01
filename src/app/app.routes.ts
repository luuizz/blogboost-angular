import { Routes, provideRouter } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationConfig } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriasIndexComponent } from './pages/categorias-index/categorias-index.component';

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
    path: 'categorias',
    component: CategoriasIndexComponent
  },
  {
    path: 'categoria/:slug',
    component: CategoriaComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

export class AppRountingModule {}

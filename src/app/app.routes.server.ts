import { RenderMode, ServerRoute } from '@angular/ssr';
import { getAllSlugs, getSingleCategory  } from 'utils/hygraph';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'post/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const slugs = await getAllSlugs();
      return slugs.map(slug => ({ slug }));
    }
  },
  {
    path: 'categoria/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const slugs = await getSingleCategory();
      return slugs.map(slug => ({ slug }));
    }
  }
];

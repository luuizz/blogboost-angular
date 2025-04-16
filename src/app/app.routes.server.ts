import { RenderMode, ServerRoute } from '@angular/ssr';
import { getAllSlugs } from 'utils/hygraph';

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
  }
];

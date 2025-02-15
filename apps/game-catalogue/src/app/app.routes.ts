import { Route } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'game-details',
    loadComponent: () =>
      import('./pages/game-details/game-details.page').then(
        (m) => m.GameDetailsPage
      ),
  },
];

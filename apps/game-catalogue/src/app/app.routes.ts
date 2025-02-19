import { Route } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { GameDetailsPageComponent } from './pages/game-details/game-details.page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'game-details',
    component: GameDetailsPageComponent,
  },
];

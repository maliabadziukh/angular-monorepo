import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'game',
        loadComponent: () =>
          import('@angular-monorepo/game').then((m) => m.GameComponent),
      },
      {
        path: 'ui',
        loadComponent: ()=> import('@angular-monorepo/ui').then((m)=>m.UiComponent),
      }
];

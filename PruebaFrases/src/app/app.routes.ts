import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'frases',
    loadComponent: () =>
      import('./frasescrud/frasescrud.page').then((m) => m.FrasescrudPage),
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./configurations/configurations.page').then(
        (m) => m.ConfigurationsPage
      ),
  },
];

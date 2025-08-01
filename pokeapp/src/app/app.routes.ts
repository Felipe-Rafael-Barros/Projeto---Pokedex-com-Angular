import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'details/:name',  // escrita :name pois é parâmetro dinâmico
    loadComponent: () => import('./pages/details/details.page').then(m => m.DetailsPage)
  }
];
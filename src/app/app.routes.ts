import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.router')
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.router')
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }
];

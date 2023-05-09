import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'platform',
    loadComponent: () => import('@modules/platform/platform.component').then((c) => c.PlatformComponent),
    title: 'Platform'
  }
];

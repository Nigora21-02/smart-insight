import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Dashboard },
      { path: 'reports', loadComponent: () => import('./features/reports/pages/reports/reports').then(module => module.Reports) },   //module is object with all exports from the module, we need to specify which component to load
      { path: 'system', loadComponent: () => import('./features/system-health/pages/system-health/system-health').then(module => module.SystemHealth) }
    ]
  }
];
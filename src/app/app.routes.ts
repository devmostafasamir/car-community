import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('../app/auth/auth-module').then(m => m.AuthModule) },
  { path: 'cars', loadChildren: () => import('../app/cars/cars-module').then(m => m.CarsModule) },
  { path: 'customers', loadChildren: () => import('../app/customers/customers-module').then(m => m.CustomersModule) },
  { path: 'posts', loadChildren: () => import('../app/posts/posts-module').then(m => m.PostsModule) },
  { path: 'events', loadChildren: () => import('../app/events/events-module').then(m => m.EventsModule) },
  { path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard-module').then(m => m.DashboardModule) },
];


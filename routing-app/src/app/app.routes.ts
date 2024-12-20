import { Routes } from '@angular/router';
import { Page01Component } from './pages/page-01/page-01.component';
import { Page02Component } from './pages/page-02/page-02.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { page02Guard } from './page-02.guard';

export const routes: Routes = [
  { path: 'page01', component: Page01Component },
  // { path: 'page02', component: Page02Component },
  { path:
    'page02',
    loadComponent: ()=>import('./pages/page-02/page-02.component').then(c => c.Page02Component),
    canActivate: [page02Guard],
  },
  { path: '',   redirectTo: '/page01', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

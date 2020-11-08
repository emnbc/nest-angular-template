import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerPagesComponent } from './inner-pages.component';
import { IsAuthGuard } from '../../guards/is-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InnerPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canLoad: [IsAuthGuard],
      },
      {
        path: 'users',
        canLoad: [IsAuthGuard],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'about',
        canLoad: [IsAuthGuard],
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
    ],
    canActivateChild: [IsAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerPagesRoutingModule { }

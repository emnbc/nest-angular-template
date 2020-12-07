import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';
import { IsAuthGuard } from './guards/is-auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m => m.WelcomePageModule),
    canLoad: [IsNotAuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    canLoad: [IsAuthGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then(m => m.SignInPageModule),
    canLoad: [IsNotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

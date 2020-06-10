import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [IsNotAuthGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [IsNotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

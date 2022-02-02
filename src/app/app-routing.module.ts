import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginGuard } from './core/guard/login.guard';

const routes: Routes = [
  {
    path:"", 
    // canActivate:[LoginGuard],
    loadChildren:()=> import('./preauth/preauth.module').then(m=>m.PreauthModule),
  },
  {
    path:"dashboard",
    loadChildren:()=> import('./postauth/postauth.module').then(m=>m.PostauthModule),
    // canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

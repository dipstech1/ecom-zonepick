import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostauthShellComponent } from './postauth-shell.component';

const routes: Routes = [
  {
    path:"",
    component:PostauthShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostauthRoutingModule { }

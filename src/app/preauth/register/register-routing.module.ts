import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterContainerComponent } from './container/register-container/register-container.component';

const routes: Routes = [
  {path:"", component:RegisterContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

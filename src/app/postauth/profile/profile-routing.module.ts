import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './container/edit-profile/edit-profile.component';
import { ProfileDetailsComponent } from './container/profile-details/profile-details.component';

const routes: Routes = [
  {path:"", component:ProfileDetailsComponent},
  {path:"edit-profile", component:EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

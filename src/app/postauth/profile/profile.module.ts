import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from './container/profile-details/profile-details.component';
import { ProfileDetailsInfoComponent } from './components/profile-details-info/profile-details-info.component';
import { EditProfileComponent } from './container/edit-profile/edit-profile.component';
import { ProfileService } from './api/profile.service';


@NgModule({
  declarations: [
    ProfileDetailsComponent,
    ProfileDetailsInfoComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers:[ProfileService]
})
export class ProfileModule { }

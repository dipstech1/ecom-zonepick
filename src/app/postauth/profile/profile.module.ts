import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from './container/profile-details/profile-details.component';
import { ProfileDetailsInfoComponent } from './components/profile-details-info/profile-details-info.component';


@NgModule({
  declarations: [
    ProfileDetailsComponent,
    ProfileDetailsInfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

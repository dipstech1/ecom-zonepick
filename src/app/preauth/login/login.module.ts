import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginComponent } from './component/social-login/social-login.component';
import { LoginService } from './api/login.service';
import { LoginFacade } from './facade/login-facade';


@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginComponent,
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[LoginService,LoginFacade]

})
export class LoginModule { }

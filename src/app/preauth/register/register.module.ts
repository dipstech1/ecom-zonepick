import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterContainerComponent } from './container/register-container/register-container.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './api/register.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFacade } from './facade/register-facade';
import { ModalModule } from 'src/app/ui-libary/modal/modal.module';


@NgModule({
  declarations: [
    RegisterContainerComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers:[RegisterService,RegisterFacade]
})
export class RegisterModule { }

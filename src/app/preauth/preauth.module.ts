import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreauthRoutingModule } from './preauth-routing.module';
import { PreauthShellComponent } from './preauth-shell.component';
import { AuthService } from './api/auth.service';
import { AuthFacade } from './facade/auth-facade';


@NgModule({
  declarations: [
    PreauthShellComponent
  ],
  imports: [
    CommonModule,
    PreauthRoutingModule,
  ],
  providers:[AuthService,AuthFacade]
})
export class PreauthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreauthRoutingModule } from './preauth-routing.module';
import { PreauthShellComponent } from './preauth-shell.component';



@NgModule({
  declarations: [
    PreauthShellComponent
  ],
  imports: [
    CommonModule,
    PreauthRoutingModule,
  ],
})
export class PreauthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreauthRoutingModule } from './preauth-routing.module';
import { PreauthShellComponent } from './preauth-shell.component';
import { UiLibaryModule } from '../ui-libary/ui-libary.module';
import { LoaderModule } from '../ui-libary/loader/loader.module';



@NgModule({
  declarations: [
    PreauthShellComponent,
  ],
  imports: [
    CommonModule,
    PreauthRoutingModule,
    LoaderModule
  ],
})
export class PreauthModule { }

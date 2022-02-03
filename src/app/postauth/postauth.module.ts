import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostauthRoutingModule } from './postauth-routing.module';
import { PostauthShellComponent } from './postauth-shell.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostauthShellComponent
  ],
  imports: [
    CommonModule,
    PostauthRoutingModule,
    SharedModule,
  ]
})
export class PostauthModule { }

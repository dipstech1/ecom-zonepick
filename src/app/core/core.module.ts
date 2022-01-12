import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { AuthenticationService } from './service/authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { 
  static forRoot():ModuleWithProviders<CoreModule>{
    return{
      ngModule:CoreModule,
      providers:[
          AuthGuard,
          LoginGuard,
          AuthenticationService
      ]
    }
  }
}

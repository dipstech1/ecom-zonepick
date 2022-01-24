import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpService } from './service/http.service';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { AuthenticationService } from './service/authentication.service';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptor } from './interceptors/loading.interceptor';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthenticationService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    super(core);
  }
}


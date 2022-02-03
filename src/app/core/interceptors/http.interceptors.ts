import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ToasterService } from '../service/toaster.service';
import { AuthenticationService } from '../service/authentication.service';
import { LOGIN_KEY } from 'src/app/constants/storage.constant';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private notificationService:ToasterService,private authService:AuthenticationService ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: any = this.authService.getStorageData(LOGIN_KEY)?.token;

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        console.log("request ", request);
        

        return next.handle(request).pipe(
            tap(evt => {
                if(evt instanceof HttpResponse)
                    console.log(evt)
            }),
            map((event: HttpEvent<any>) => {
                console.log("event ", event);
                
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);

                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data:any = {};
                data = {
                    reason: error && error.error.message ? error.error.message : '',
                    status: error.status,
                    title:error && error.error.error ? error.error.error : '',
                };
                console.log(error);
                this.notificationService.showError(data.reason,data.title)
                return throwError(error);
            }));
    }
}

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


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private notificationService:ToasterService ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: any = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

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

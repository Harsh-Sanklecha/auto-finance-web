import { Injectable } from '@angular/core';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RES_TYPES } from '../models/enums';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastService: ToastrService,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(res => {
            if (res instanceof HttpResponse) {
                if (res.body.success === false && (res.body.code === 1000)) {
                    if (res.body.type == RES_TYPES.ERROR) {
                        this.toastService.error(res.body.message);
                    }
                }
            }
        }), catchError(err => {

            if (err.status === 401) {
            } else if (err.status === 400) {
            } else if (err.status === 500) {
                // responses for the family of internal server errors
            }
            return throwError(err);
        }));
    }

}



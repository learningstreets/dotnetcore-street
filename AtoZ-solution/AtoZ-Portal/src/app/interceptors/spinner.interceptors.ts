
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { UtilService } from '../service/utilService';

@Injectable()

export class SpinnerInterceptor implements HttpInterceptor {

    constructor(public _utilService: UtilService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._utilService.ShowSpinner();
        return next.handle(req).pipe(
            finalize(() => this._utilService.HideSpinner())
        );
    }

}
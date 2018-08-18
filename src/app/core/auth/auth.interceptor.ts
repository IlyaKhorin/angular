import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";


export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (window.localStorage.getItem('token')) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', window.localStorage.getItem('token'))
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}

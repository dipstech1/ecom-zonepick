import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../api/auth.service";

@Injectable()
export class AuthFacade {
    loginResponse$!:Observable<any>
    constructor(private authService:AuthService){}

    loginUser(userData:any){
        this.loginResponse$ = this.authService.login(userData);
        return this.loginResponse$
    }
}

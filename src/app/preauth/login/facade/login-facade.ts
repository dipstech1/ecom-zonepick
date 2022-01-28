import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuth, ILoginResponse } from "../../model/Login.model";
import { LoginService } from "../api/login.service";


@Injectable()
export class LoginFacade {
    loginResponse$!:Observable<any>
    constructor(private authService:LoginService){}

    loginUser(userData:IAuth){
        this.loginResponse$ = this.authService.login(userData)
        return this.loginResponse$
    }
}

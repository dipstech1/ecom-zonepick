import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuth } from "../../model/IAuth.model";
import { LoginService } from "../api/login.service";


@Injectable()
export class LoginFacade {
    loginResponse$!:Observable<any>
    constructor(private authService:LoginService){}

    loginUser(userData:IAuth){
        this.loginResponse$ = this.authService.add(userData)
        return this.loginResponse$
    }
}

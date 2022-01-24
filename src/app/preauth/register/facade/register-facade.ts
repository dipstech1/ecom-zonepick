import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRegister, IRegisterResponse } from "../../model/Register.model";
import { RegisterService } from "../api/register.service";

@Injectable()
export class RegisterFacade {
    registerResponse$!:Observable<IRegisterResponse>
    constructor(private authService:RegisterService){}

    registerUser(userData:IRegister){
        this.registerResponse$ = this.authService.registerUser(userData)
        return this.registerResponse$
    }

    sendVerificationCode(otpCode:string, userId:string){
        return this.authService.verifyOTP(otpCode,userId)
    }
}

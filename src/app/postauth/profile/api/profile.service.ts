import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/service/authentication.service";
import { environment } from "src/environments/environment";

@Injectable()
export class ProfileService{

    constructor(private http:HttpClient, private authService:AuthenticationService){}

    getLoggedInUserProfile(){
        // return this.http.get()
        let uid = this.authService.getUserId();
        return this.http.get(`https://wb94xm7q2j.execute-api.ap-south-1.amazonaws.com/dev/profile/${uid}`)
    }
}
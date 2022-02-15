import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/service/authentication.service";
import { environment } from "src/environments/environment";

@Injectable()
export class ProfileService{

    constructor(private http:HttpClient, private authService:AuthenticationService){}
    uid = this.authService.getUserId();

    getLoggedInUserProfile(){
        // return this.http.get()
        return this.http.get(`${environment.baseUrl}${environment.apiURL.profile}/${this.uid}`)
    }

    editProfie(userDetails:any){
        return this.http.patch(`${environment.baseUrl}${environment.apiURL.profile}/${this.uid}`,userDetails)
    }
}
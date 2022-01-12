import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { ILoginResponse } from 'src/app/preauth/model/Login.model';
import { LoginFacade } from '../../facade/login-facade';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade:LoginFacade, private router:Router, private authenticationService:AuthenticationService){}
  ngOnInit(): void {
    
  }

  login(e:any){
    let data = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }

   this.authFacade.loginUser(data).subscribe((r:ILoginResponse) => {
      if(r.token){
        this.authenticationService.setStorage("token",r.token)
        this.router.navigate(['dashboard'])
      }
   })
  }

}

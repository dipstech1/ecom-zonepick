import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { IAuth, ILoginResponse } from 'src/app/preauth/model/Login.model';
import { LoginService } from '../../api/login.service';
import { LoginFacade } from '../../facade/login-facade';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade:LoginFacade, private router:Router, 
    private authenticationService:AuthenticationService,private ls:LoginService){}
  ngOnInit(): void {
      
  }

  login(data:IAuth){
    
   this.authFacade.loginUser(data).subscribe((r:any) => {
      console.log(r);
      
   })
  }

}

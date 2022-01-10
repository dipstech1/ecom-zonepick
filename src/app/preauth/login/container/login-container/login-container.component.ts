import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthFacade } from 'src/app/preauth/facade/auth-facade';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade:AuthFacade){}
  ngOnInit(): void {
    
  }

  login(e:any){
    let data = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }

   this.authFacade.loginUser(data).subscribe((r:any) => {
     console.log(r);
     
   })
  }

}

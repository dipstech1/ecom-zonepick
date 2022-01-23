import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRegister } from 'src/app/preauth/model/Register.model';
import { RegisterFacade } from '../../facade/register-facade';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  constructor(private registerFacade:RegisterFacade){}
  ngOnInit(): void {
  }

  
  register(data:IRegister){
    this.registerFacade.registerUser(data).subscribe((res) => {
      console.log(res.message);
      
    })
  }
}

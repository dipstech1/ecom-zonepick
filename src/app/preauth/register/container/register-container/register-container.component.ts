import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IRegister, IRegisterResponse } from 'src/app/preauth/model/Register.model';
import { ModalService } from 'src/app/ui-libary/modal/service/modal.service';
import { RegisterFacade } from '../../facade/register-facade';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  registerSuccess$!: Observable<IRegisterResponse>
  constructor(private registerFacade:RegisterFacade, private modalService:ModalService){}
  ngOnInit(): void {
    this.open()
  }

  
  register(data:IRegister){
    this.registerSuccess$ = this.registerFacade.registerUser(data)
  }

  open() {
    this.modalService.open();
  }

  onCodeChanged(code: any) {
    console.log("onCodeChanged ", code);
    
  }

  // this called only if user entered full code
  onCodeCompleted(code: any) {
    console.log("onCodeCompleted ", code);

  }
}

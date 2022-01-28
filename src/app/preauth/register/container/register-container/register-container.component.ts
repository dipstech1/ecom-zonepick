import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { first, pluck, takeUntil } from 'rxjs/operators';
import { ToasterService } from 'src/app/core/service/toaster.service';
import { IRegister, IRegisterResponse } from 'src/app/preauth/model/Register.model';
import { ModalService } from 'src/app/ui-libary/modal/service/modal.service';
import { RegisterFacade } from '../../facade/register-facade';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit,OnDestroy {
  registerSuccess!:IRegisterResponse;
  private ngUnsubscribe = new Subject();
  constructor(private registerFacade:RegisterFacade, private modalService:ModalService,private toaster:ToasterService){}
  
  ngOnInit(): void {
    this.open()
  }

  
  register(data:IRegister){
    this.registerFacade.registerUser(data)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data:IRegisterResponse) => {
      this.registerSuccess = data;
      this.toaster.showSuccess(this.registerSuccess.message, "Register Succsfull")
    })
  }

  open() {
    this.modalService.open();
  }

  onCodeChanged(code: any) {
    // console.log("onCodeChanged ", code);
    
  }

  // this called only if user entered full code
  onCodeCompleted(code: any) {
    this.registerFacade.sendVerificationCode(code,this.registerSuccess.userid)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => {
      console.log(res)
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

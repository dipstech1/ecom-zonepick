import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IRegister } from 'src/app/preauth/model/Register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  @Output() regiterEmitter = new EventEmitter<IRegister>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone:  ['', [Validators.required, Validators.minLength(10)]],
      state:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
      password: ['', [Validators.required]],
      con_password: ['', [Validators.required]],
      test: new FormControl('')
    })
  }
  get getControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    let s = this.registerForm.controls.test as FormControl;
    const {name,email,phone,state,pincode,password} = this.registerForm.value as IRegister
    this.regiterEmitter.emit({name,email,phone,state,pincode,password})
  }

}

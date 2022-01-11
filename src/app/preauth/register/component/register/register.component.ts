import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone:  ['', [Validators.required, Validators.minLength(10)]],
      state:  ['', [Validators.required]],
      zip:  ['', [Validators.required]],
      password: ['', [Validators.required]],
      con_password: ['', [Validators.required]]
    })
  }
  get getControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm.value);

  }

}

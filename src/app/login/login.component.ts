import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

import { Router,ActivatedRoute  } from '@angular/router';

import { AuthenticationService } from '../-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  LoginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder,
          private router:Router, private route: ActivatedRoute,
          private authenticationService:AuthenticationService

          ) { }
  

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams[''] || '/';
  }

  get f() { return this.LoginForm.controls; }


  OnSubmit(customerData){
    
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    } 
  }

}

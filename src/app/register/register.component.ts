import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  errorMessage = "";

  registerMessage = "Register";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.email],
      pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  register() {
    this.errorMessage = "";

    this.registerMessage = "Registering...";

    var body = { email: this.registerForm.get("email").value, pass: this.registerForm.get("pass").value };
    this.http.post(environment.apiURL + "/register", body, { responseType: 'text' }).subscribe((data) => {
      this.errorMessage = data;
      this.registerMessage = "Register";
    }, (error) => {
      this.errorMessage = error.error;
      this.registerMessage = "Register";
    });
  }

}

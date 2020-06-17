import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  errorMessage = "";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  register() {
    this.errorMessage = "";
    var body = { email: this.loginForm.get("email").value, pass: this.loginForm.get("pass").value };
    console.log(body);
    this.http.post( environment.apiURL + "/login", body, { responseType: 'text' }).subscribe((data) => {
      console.log(data);
      this.errorMessage = data;
    }, (error) => {
      console.log(error);
      this.errorMessage = error.error;
    });
  }
}

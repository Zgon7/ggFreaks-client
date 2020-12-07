import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../Services/Authentification/authentification.service";
import {Login} from "../../../Models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: Login;
  constructor(private formBuilder: FormBuilder, private auth: AuthentificationService) {
    this.user = new Login();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    return this.auth.login(this.user).subscribe(r => {
      // @ts-ignore
      localStorage.setItem('token', r.token);
      // @ts-ignore
      localStorage.setItem('role', r.role);
      // @ts-ignore
      localStorage.setItem('userId', r.userId);
      console.log(r);
      }, error => {});
  }

}

import { Component, OnInit } from '@angular/core';
import {Login} from "../../../Models/login";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Client} from "../../../Models/client";
import {DialogComponent} from "../dialog.component";
import {ClientService} from "../../../Services/Client/client.service";
type Type = 'text' | 'password' ;


// la fonction de password et confirm password
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {};
  user: Client;
  registerForm: FormGroup;
  maxDate = new Date(2003, 0, 0);
  minDate = new Date(1920, 0, 1);
  private convertDate: string;

  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  gender;
  dialogComponent: MatDialogRef<DialogComponent>;



  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private clientService: ClientService) {
    this.user = new Client();
  }

  ngOnInit() {

  }




  add() {
    // console.log(this.user);
    this.user.password = "Abcd123";
    this.clientService.save(this.user).subscribe(value => {
      console.log(value);
    });
  }
}

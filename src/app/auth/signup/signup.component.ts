import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel, NgModelGroup, FormControl, FormArray} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';
import { promise } from 'protractor';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations : [routingAminTriggerEnterLeft]
})
export class SignupComponent implements OnInit {

// ======= TD ==============
  //view form before submit
  @ViewChild('loginForm') loginForm : NgForm;
  @ViewChild('lgroup') loginGroup : NgModelGroup;

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;
  
  inProgress = false;

  constructor(private router:Router, private authSrv : AuthService) {}

  ngOnInit() {

    this.loginReactiveForm = new FormGroup({
    'credentials' : new FormGroup(
        {
        'username' : new FormControl(null, Validators.required), //custom validator
        'password' : new FormControl(null, Validators.required)
        }
      )
    });
  }

loginReactiveForm : FormGroup;

loginRF() {
  this.inProgress = true;
  this.authSrv.signUp(
    this.loginReactiveForm.get('credentials.username').value,
    this.loginReactiveForm.get('credentials.password').value);
}


}

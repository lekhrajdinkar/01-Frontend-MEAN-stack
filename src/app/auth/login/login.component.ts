import { Component, OnInit, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, NgModel, NgModelGroup, FormControl, FormArray} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/SERVICE/auth-service.service';
import { routingAminTriggerEnterLeft } from 'src/app/common/tact.anim-1';
import { promise } from 'protractor';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'login',
  templateUrl: './login.RF.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routingAminTriggerEnterLeft]
})
export class LoginComponent implements OnInit {

// ======= TD ==============
  //view form before submit
  @ViewChild('loginForm') loginForm : NgForm;
  @ViewChild('lgroup') loginGroup : NgModelGroup;

  @HostBinding('@routingAminTriggerEnterLeft') routingAminTriggerEnterLeft = true;
  
  inProgress = false;

  constructor(private router:Router, private authSrv : AuthService, private socket : Socket) {}

  ngOnInit() {

    console.log(this.loginForm); 

    this.authSrv.user$.subscribe(
      data => {
        if(data.username != 'unknown') {
          console.log(data);
          this.inProgress= true; 
        }
        else this.inProgress=false;
      }
    )

    //RF --> set defualtt  and validator (sync, asyn)
    this.loginReactiveForm = new FormGroup({
    'credentials' : new FormGroup(
        {
        'username' : new FormControl("lekhrajDinkar", [Validators.required, Validators.minLength(6),this.customValidator1.bind(this)]), //custom validator
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
        }
      )
    });
    console.log(this.loginReactiveForm);
  }

loginReactiveForm : FormGroup;

loginRF() {
  this.inProgress = true;
  this.authSrv.authorize(
    this.loginReactiveForm.get('credentials.username').value,
    this.loginReactiveForm.get('credentials.password').value);
}

setdefaultRF(){this.loginReactiveForm.setValue({
  'credentials':{'username' : "lekhrajdinkar", 'password' : '123456'}
})} 



//Sync
customValidator1(control : FormControl) : any{
  if (control.value === 'INYTEST') {
    return {'customValidatorKey' : true}; 
  }
  return null;
}

launchSignUp(){
  console.log('launchSignUp');
  this.router.navigate(["signup"]);
}

}

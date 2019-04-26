import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-user',
  templateUrl: './alert-user.component.html',
  styleUrls: ['./alert-user.component.css']
})
export class AlertUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData : any){
    console.log('AboutComponent contstor called', passedData);
}

  ngOnInit() {
  }

}
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-about',
    template: `
    <h1> About MEAN STACK tool</h1>

<mat-dialog-content>
Version : {{passedData.version}}
<p> Demo application </p>
<p> Developer : Lekhraj Dinkar </p>
</mat-dialog-content>
<mat-divider></mat-divider>
<mat-dialog-actions>
  <button mat-raised-button color="accent"[mat-dialog-close]="true">Close</button>
</mat-dialog-actions>`
})
  export class AboutComponent implements OnInit {


    ngOnInit(): void {}
    
    constructor(@Inject(MAT_DIALOG_DATA) public passedData : any){
        console.log('AboutComponent contstor called', passedData);
    }
      
  }
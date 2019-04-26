import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { compBumpNoState } from 'src/app/common/tact.anim-1';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations : [compBumpNoState]
})
export class UserDetailComponent implements OnInit {

  index = 0;

  data ;


  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.index = params['index'];
    
        if(this.index == 0){
          this.data = {
            labels: ['Analysis','Coding','Meeting'],
            datasets: [{
                    data: [30, 50, 20],
                    backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                    hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                }]    
            };
        }

        if(this.index == 1){
          this.data = {
            labels: ['Analysis','Coding','Meeting'],
            datasets: [{
                    data: [20, 40, 40],
                    backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                    hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                }]    
            };
        }

        if(this.index == 2){
          this.data = {
            labels: ['Analysis','Coding','Meeting'],
            datasets: [{
                    data: [10, 50, 40],
                    backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                    hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                }]    
            };
        }
        if(this.index == 4){
          
            this.data = {
              labels: ['Analysis','Coding','Meeting'],
              datasets: [{
                      data: [0, 50, 50],
                      backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                      hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                  }]    
              };
          
        }
    
    }
    )
  }

}

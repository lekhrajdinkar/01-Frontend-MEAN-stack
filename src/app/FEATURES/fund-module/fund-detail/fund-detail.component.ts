import { Component, OnInit } from '@angular/core';
import { UnderlyingFund } from '../underlyingFund.model';
import { FundService } from '../fund.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.css']
})
export class FundDetailComponent implements OnInit {

  fof_num : String;
  underlyingFunds : UnderlyingFund[];
  noUFflag = true;
  constructor(private fundSrv : FundService, private route : ActivatedRoute) { }
  _id;
  isProgress = true;

  ngOnInit() {
    //this.fof_num = this.route.snapshot.queryParams['fof_num'];
    //this._id= this.route.snapshot.params['_id'];
    console.log(this.fof_num, this._id);
    this.getDetails();

    this.route.params.subscribe(
      data => {
        this.isProgress = true;
        this._id = data['_id']; 
      //console.log('data', data);
      this.getDetails(); 
      } ,
      err => console.error(err)
    )
     
  }

  //1. Get Full response
  getDetails = () => {
  this.fundSrv.getUunderLyingFunds( this._id )
  .subscribe(
    (data) => { 
       setTimeout( ()=> {
        this.isProgress = false;
         this.underlyingFunds = data;
         if(data.length == 0){ 
           this.noUFflag = true;
         }
        console.log('HTTP Response body: ',data) ;},1000)},
    (err) => {console.log(err);}
  );
  }

}

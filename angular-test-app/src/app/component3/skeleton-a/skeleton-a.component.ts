import { Component, OnInit } from '@angular/core';
import {SelectNewService} from "../../select-new.service";
import {NEWS} from '../../shared/NEWS_INTERFACE'
@Component({
  selector: 'app-skeleton-a',
  templateUrl: './skeleton-a.component.html',
  styleUrls: ['./skeleton-a.component.css']
})
export class SkeletonAComponent implements OnInit {

  constructor(public selectService:SelectNewService) {
     this.selectService.propety.subscribe(sNew=>this.sNew=sNew)
   console.log("get:"+this.sNew.title)
  }
  sNew:NEWS
  
  ngOnInit() {
  // this.selectService.propety.subscribe(idd=>this.idd=idd)
   //console.log("get:"+this.idd)
  }

}
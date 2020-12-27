import { Component, OnInit } from '@angular/core';
import {SelectNewService} from "../../select-new.service";
import {NEWS} from '../../shared/NEWS_INTERFACE'
@Component({
  selector: 'app-skeleton-a',
  templateUrl: './skeleton-a.component.html',
  styleUrls: ['./skeleton-a.component.css']
})
export class SkeletonAComponent implements OnInit {
  tipeher : NEWS;
  constructor(public selectService:SelectNewService) {
    this.selectService.propety.subscribe(tipeher=>this.tipeher=tipeher)
   console.log("get:"+this.tipeher.title)
  }
  
  ngOnInit() {}

}
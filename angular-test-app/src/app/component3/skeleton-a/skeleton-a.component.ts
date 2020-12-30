import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NEWSLIST} from "../../shared/NEWSMOCKS";
import {NEWS} from "../../shared/NEWS_INTERFACE";
=======
import {SelectNewService} from "../../select-new.service";
import {NEWS} from '../../shared/NEWS_INTERFACE'
>>>>>>> upstream/main
@Component({
  selector: 'app-skeleton-a',
  templateUrl: './skeleton-a.component.html',
  styleUrls: ['./skeleton-a.component.css']
})
export class SkeletonAComponent implements OnInit {
<<<<<<< HEAD
tipeher: NEWS 
tipe:  string[]

  constructor() { }

  ngOnInit() {
    this.tipeher = NEWSLIST[0] 
    this.tipe = this.tipeher.main
=======
  tipeher : NEWS;
  constructor(public selectService:SelectNewService) {
    this.selectService.propety.subscribe(tipeher=>this.tipeher=tipeher)
   console.log("get:"+this.tipeher.title)
>>>>>>> upstream/main
  }
  
  ngOnInit() {}

}
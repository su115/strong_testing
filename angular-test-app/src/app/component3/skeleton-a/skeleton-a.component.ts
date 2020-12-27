import { Component, OnInit } from '@angular/core';
import {NEWSLIST} from "../../shared/NEWSMOCKS";
import {NEWS} from "../../shared/NEWS_INTERFACE";
@Component({
  selector: 'app-skeleton-a',
  templateUrl: './skeleton-a.component.html',
  styleUrls: ['./skeleton-a.component.css']
})
export class SkeletonAComponent implements OnInit {
tipeher: NEWS 
tipe:  string[]

  constructor() { }

  ngOnInit() {
    this.tipeher = NEWSLIST[0] 
    this.tipe = this.tipeher.main
  }

}
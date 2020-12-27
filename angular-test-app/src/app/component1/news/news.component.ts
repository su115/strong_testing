import { Component, OnInit } from '@angular/core';


//import work new
import {NEWS} from "../../shared/NEWS_INTERFACE";
import {NEWSLIST} from "../../shared/NEWSMOCKS";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news=NEWSLIST;
  constructor() { }

  ngOnInit(): void {
  }

}

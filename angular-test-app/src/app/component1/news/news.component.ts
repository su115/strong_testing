import { Component, OnInit } from '@angular/core';


//import work new
import {NEWS} from "../../NEWS_INTERFACE";
import {NEWSLIST} from "../../NEWSMOCKS";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:NEWS=NEWSLIST;
  constructor() { }

  ngOnInit(): void {
  }

}

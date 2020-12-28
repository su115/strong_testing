import { Component, OnInit } from '@angular/core';

//COMPONENTS START
import { FooterComponent } from "../footer/footer.component";
//import { BackgroundNewsComponent } from "../background-news/background-news.component";
import { MenuComponent } from "../menu/menu.component";
import {HeaderComponent} from "../header/header.component";
import {NewsComponent}from "../news/news.component";
import {NewsDayComponent} from "../news-day/news-day.component";
import {TematicsComponent} from "../tematics/tematics.component";
//COMPONENTS END
import {SkeletonAComponent} from "../../component3/skeleton-a/skeleton-a.component"
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';


//make stronger
import {NAV} from "../../shared/NAV_INTERFACE";
import {NAVLIST} from "../../shared/NAVMOCKS";
//
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  panel=NAVLIST;
  /*getPanel():NAV[]{
    let nav=NAVLIST;
    return nav
  }*/
  constructor() { }

  ngOnInit(): void {
    //this.panel = this.getPanel();
  }

}

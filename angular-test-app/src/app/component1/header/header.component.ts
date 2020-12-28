import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../search.service';
//import {InputComponent} from '../input/input.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchWord?:string
  constructor(private searchService:SearchService) { }
  title = "Enguide TODAY"
  ngOnInit(): void {
    this.searchService.sharedWord.subscribe(searchWord=>this.searchWord=searchWord)
  }


  OnTip(){
    const v = <HTMLInputElement>document.getElementById("searchinp");
    this.searchWord = v.value
    console.log(v.value)

  }

}

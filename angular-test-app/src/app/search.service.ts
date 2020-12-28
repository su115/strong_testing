import { Injectable } from '@angular/core';
import {SelectNewService} from './select-new.service';
import {NEWS}from './shared/NEWS_INTERFACE'
import { BehaviorSubject } from 'rxjs';
import {NEWSLIST}from './shared/NEWSMOCKS'
@Injectable()
export class SearchService {
  sea?:NEWS[]
  selected:NEWS[]=NEWSLIST
  constructor(public selectNew:SelectNewService) { }
  //---------------------------------------
  private sWord=new BehaviorSubject('nothing');
  sharedWord=this.sWord.asObservable();
  nextSearch(s:string){
    this.sWord.next(s)
  }
//-----------------------------------------
  searchNew(strd:string):NEWS[]{
    this.sea=this.selectNew.getNews()
    for (let ne of this.sea){
      for (let words of ne.main){
        for (let word of words.split(' ')){
          if(word===strd){
            this.selected.push(ne)
            break;
          }
        }
        if(this.selected.includes(ne)){break}
      }
      if(this.selected.includes(ne)){break}
    }
    return this.selected
  }
//------------------------------------------

}
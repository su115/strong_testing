import { Injectable } from "@angular/core";
import { NEWS } from "./shared/NEWS_INTERFACE";
import { NEWSLIST } from "./shared/NEWSMOCKS";
import {PARSED} from './shared/data'
import { BehaviorSubject } from "rxjs";
@Injectable({ providedIn: "root" })
export class SelectNewService {
  listN?: NEWS[];
  private selectedNew = new BehaviorSubject(NEWSLIST[0]);
  propety = this.selectedNew.asObservable()
  SetSelectNew(value: NEWS) {
    this.selectedNew.next(value);
    
    console.log(value.title)
  }
  //setNews(list:NEWS[]){}
  getNews(): NEWS[] {
    this.listN = PARSED;
    return this.listN;
  }

  /*
  SearchNew(value: string): NEWS[] {
    let FoundN: NEWS[] = [];
    for (let n of this.listN) {
      for (let j of n.main) {
        let massive: string[] = j.split(" ");
        for (let i of massive) {
          if (i === value) {
            FoundN.push(n);
          }
        }
      }
    }
    return FoundN;
  }*/

  /*
  GetSelected(): NEWS|undefined {
    console.log("SelectNewService:getSelected:" + this.selectedNew);
    return null;
  }*/

  constructor() {}
}

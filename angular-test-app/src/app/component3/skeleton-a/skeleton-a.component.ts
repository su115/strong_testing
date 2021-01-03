import { Component, OnInit } from "@angular/core";
import { SelectNewService } from "../../select-new.service";
import { NEWS } from "../../shared/NEWS_INTERFACE";
//import { NEWSLIST } from "../../shared/NEWSMOCKS";
@Component({
  selector: "app-skeleton-a",
  templateUrl: "./skeleton-a.component.html",
  styleUrls: ["./skeleton-a.component.css"]
})
export class SkeletonAComponent implements OnInit {
  tipeher?: NEWS;
  constructor(public selectService: SelectNewService) 
  {
    this.selectService.propety.subscribe(tipeher => (this.tipeher = tipeher));
    console.log("get:" + this.tipeher?.title);


    console.log(this.tipeher?.photo)
    if (this.tipeher?.photo == "#") {
      console.log("this new dont ave photo");
      this.tipeher.photo = undefined;
      //console.log("this new dont ave photo");
    }
  }

  ngOnInit() {}
}

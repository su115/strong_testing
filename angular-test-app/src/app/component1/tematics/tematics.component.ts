import { Component, OnInit } from '@angular/core';
import { SelectNewService} from '../../select-new.service'
import { NEWS} from '../../shared/NEWS_INTERFACE'
@Component({
  selector: 'app-tematics',
  templateUrl: './tematics.component.html',
  styleUrls: ['./tematics.component.css']
})
export class TematicsComponent implements OnInit {
  tema?:string;

  constructor(private selectNew:SelectNewService) { }

  ngOnInit(): void {
    let list:NEWS[]=this.selectNew.getNews()
    this.tema=list[Math.floor(Math.random() * Math.floor(list.length))].title;
  }

}

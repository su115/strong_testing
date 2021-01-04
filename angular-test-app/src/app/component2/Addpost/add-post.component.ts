import { Component } from '@angular/core';

import { NEWS } from '../../shared/NEWS_INTERFACE'
import {SelectNewService} from '../../select-new.service'

//import { Post } from '../models/post.model';

 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(public selectNew:SelectNewService) {
   
  }
  Add_Active(){
    var object:NEWS;
    var id = (<HTMLInputElement>document.getElementById('id')).value; 
    console.log(id);
    var title = (<HTMLInputElement>document.getElementById('title')).value;
    console.log(title);
    var minidesc = (<HTMLInputElement>document.getElementById('minidesc')).value;
    console.log(minidesc);
    var main = (<HTMLInputElement>document.getElementById('main')).value;
    console.log(main);
    var photo = (<HTMLInputElement>document.getElementById('photo')).value;
    console.log(photo);
    var date = (<HTMLInputElement>document.getElementById('date')).value;
    console.log(date);
    object.id = undefined
    object.title = title
    object.minidesc = minidesc
    object.main = undefined
    object.photo = photo
    object.date = date
    this.selectNew.AddPost(object)
  }
 
}
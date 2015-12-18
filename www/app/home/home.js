import {Page, NavController, NavParams} from 'ionic/ionic';
import {HomeItem} from '../homeItem/homeItem';

@Page({
  directives : [ HomeItem ],
  templateUrl: 'app/home/home.html',
})

export class HomePage {

  constructor() {
    this.list = [{
      header :"This is Header Text",
      content : "This is the content"
    },
    {
      header :"Finally Figured It Out",
      content : "This angular2 formatting in a PITA"
    }];
  }
}

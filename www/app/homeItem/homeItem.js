import {
  Component, View, NgFor
}
from 'angular2/angular2';
import {Page, NavController, NavParams} from 'ionic/ionic';
import {HomeItemDetail} from '../homeItemDetail/homeItemDetail';

@Component({
  selector: 'home-item',
  inputs: ['inputList'],
  directives: [NgFor],
  templateUrl: 'app/homeItem/homeItem.html'
})
export class HomeItem {

  constructor(nav: NavController) {
    this.nav = nav;
  }

  openDetail(_item) {
    this.nav.push(HomeItemDetail, {pageNum:10, item: _item});
  }
}

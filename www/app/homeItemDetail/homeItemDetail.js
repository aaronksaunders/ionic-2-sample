import {NavParams, Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/homeItemDetail/homeItemDetail.html',
})
export class HomeItemDetail {

  constructor(navParams: NavParams) {
    this.params = navParams.data;
    console.log(this.params)
  }
}

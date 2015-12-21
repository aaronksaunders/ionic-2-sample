import {Page, NavController, NavParams, Modal} from 'ionic/ionic';
import {HomeItem} from '../homeItem/homeItem';

@Page({
  directives : [ HomeItem ],
  templateUrl: 'app/home/home.html',
})

export class HomePage {

  constructor(modal: Modal) {

    this.modal = modal;
    this.myParam = '';

    this.list = [{
      header :"This is Header Text",
      content : "This is the content"
    },
    {
      header :"Finally Figured It Out",
      content : "This angular2 formatting in a PITA"
    }];
  }

  addItem(){
    this.modal.open(ModalAddItemPage, { 'myParam': "Hell Yeah" });
  }
}

@Page({
    templateUrl: "app/home/modal-addItem.html"
})
export class ModalAddItemPage {
    constructor(
        nav: NavController,
        modal: Modal,
        params: NavParams
    ) {
        this.nav = nav;
        this.modal = modal;
        this.myParam = params.get('myParam');
    }

    closeModal() {
      let modal = this.modal.get();
      if (modal) {
        modal.close();
      }
    }
}

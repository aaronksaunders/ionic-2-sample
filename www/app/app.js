import {App, Platform} from 'ionic/ionic';
import {HomePage} from './home/home';

/**
 *
 */
@App({
  template: `
    <ion-nav id="nav" [root]="root" #content></ion-nav>
    <ion-overlay></ion-overlay>
  `,
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}

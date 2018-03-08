import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import { LearnmorePage } from '../pages/learnmore/learnmore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyfamilyPage } from '../pages/myfamily/myfamily';
import { ContactusPage } from '../pages/contactus/contactus';
import { MyfriendsPage } from '../pages/myfriends/myfriends';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage },
      { title: 'My Profile', component: ItemDetailsPage },
      { title: 'My Work Experiences', component: ListPage },
      { title: 'Learn More',component: LearnmorePage },
      { title: 'My Family',component: MyfamilyPage },
      { title: 'My Friends', component: MyfriendsPage },
      { title: 'Contact Us', component: ContactusPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

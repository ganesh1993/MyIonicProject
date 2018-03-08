import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LearnmorePage } from '../pages/learnmore/learnmore';
import { ContactusPage } from '../pages/contactus/contactus';
import { MyfamilyPage } from '../pages/myfamily/myfamily';
import { MyfriendsPage } from '../pages/myfriends/myfriends';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LearnmorePage,
    MyfamilyPage,
    MyfriendsPage,
    ContactusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LearnmorePage,
    MyfamilyPage,
    MyfriendsPage,
    ContactusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

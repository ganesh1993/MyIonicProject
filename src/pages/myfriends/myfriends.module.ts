import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfriendsPage } from './myfriends';

@NgModule({
  declarations: [
    MyfriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyfriendsPage),
  ],
})
export class MyfriendsPageModule {}

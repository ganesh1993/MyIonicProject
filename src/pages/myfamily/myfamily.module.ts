import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfamilyPage } from './myfamily';

@NgModule({
  declarations: [
    MyfamilyPage,
  ],
  imports: [
    IonicPageModule.forChild(MyfamilyPage),
  ],
})
export class MyfamilyPageModule {}

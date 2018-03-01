import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnmorePage } from './learnmore';

@NgModule({
  declarations: [
    LearnmorePage,
  ],
  imports: [
    IonicPageModule.forChild(LearnmorePage),
  ],
})
export class LearnmorePageModule {}

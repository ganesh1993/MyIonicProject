import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading, NavParams } from 'ionic-angular';
 
 
declare var cordova: any;


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}

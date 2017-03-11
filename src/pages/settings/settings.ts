import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    LocalNotifications.on("click", (notification, state) => {
      let alert = this.alertCtrl.create({
          title: "Notification Clicked",
          subTitle: "You just clicked the scheduled notification",
          buttons: ["OK"]
      });
      // this.navCtrl.present(alert);
      alert.present();
    });
  }

  public schedule() {
    LocalNotifications.schedule({
      title: "Test Title",
      text: "Delayed Notification",
      at: new Date(new Date().getTime() + 5 * 1000),
      sound: null
    });
  }
}
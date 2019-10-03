import { Component, ViewChild  } from '@angular/core';
import { ProviderService } from '../provider.service';
import { ToastController, NavController } from '@ionic/angular';
import { Tab3Page } from '../tab3/tab3.page'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  players;
  response;

  constructor(
    public _navCtrl: NavController,
    public _toast: ToastController,
    public _provider: ProviderService
  ) {
    this.fillPlayers()
  }

  async presentToast() {
    const toast = await this._toast.create({
      message: 'This is the conference of the team',
      duration: 1500
    });
    toast.present();
  }

  fillPlayers(){
    this._provider.getPlayers()
    .then(data => {
      this.response = data;
      this.players = this.response.data;
    });
  }

}

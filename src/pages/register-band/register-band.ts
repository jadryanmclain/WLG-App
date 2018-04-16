import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../models/band.model';
import { Item } from '../../models/item.model';
import { SongsService } from '../../services/songs/songs.service';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the RegisterBandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-band',
  templateUrl: 'register-band.html',
})
export class RegisterBandPage {
  band: Band = {
  name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private regBand: SongsService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandPage');
  }

  addBand(band: Band) {
    this.regBand.addBand(band).then(ref => {
      this.toast.show(`${band.name} registered!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}

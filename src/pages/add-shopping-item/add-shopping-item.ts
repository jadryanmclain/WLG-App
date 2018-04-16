import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { SongsService } from '../../services/songs/songs.service';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    title: '',
    chords: '',
    lyrics: '',
    band: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songs: SongsService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item) {
    this.songs.addItem(item).then(ref => {
      this.toast.show(`${item.title} added!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}

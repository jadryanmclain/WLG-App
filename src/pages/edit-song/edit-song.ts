import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { SongsService } from '../../services/songs/songs.service';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {

  item: Item;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private songs: SongsService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad EditSongPage');
    console.log(this.navParams.get('item'));
    this.item = this.navParams.get('item');
   
  }

  saveItem(item: Item) {
    this.songs.editItem(item).then(() => {
    this.toast.show(`${item.title} saved!`)
    this.navCtrl.setRoot('HomePage');
    });
  }

  removeItem(item: Item){
    this.songs.removeItem(item).then(() => {
      this.toast.show(`${item.title} removed!`)
      this.navCtrl.setRoot('HomePage');
      });
    
  }
}

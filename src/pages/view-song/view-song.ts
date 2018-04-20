import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongRequest } from '../../models/song-request.model';
import { SongRequestService } from '../../services/song-request/song-request.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the ViewSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-song',
  templateUrl: 'view-song.html',
})
export class ViewSongPage {

  item: Item;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private songs: SongsService,
  private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

}

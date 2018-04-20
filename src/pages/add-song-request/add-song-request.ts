import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongRequest } from '../../models/song-request.model';
import { SongRequestService } from '../../services/song-request/song-request.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddSongRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song-request',
  templateUrl: 'add-song-request.html',
})
export class AddSongRequestPage {
  song: SongRequest = {
    title: '',
    artist: '',
    roomCode: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private songRequests: SongRequestService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongRequestPage');
  }

  addItem(song: SongRequest) {
    this.songRequests.addRequest(song).then(ref => {
      this.toast.show(`Request for ${song.title} added to queue!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
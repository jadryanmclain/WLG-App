import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Room } from '../../models/room.model';
import { SongRequest } from '../../models/song-request.model';
import { SongRequestService } from '../../services/song-request/song-request.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the CreateRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-room',
  templateUrl: 'create-room.html',
})
export class CreateRoomPage {
  room: Room = {
    name: '',
    code: this.songRequestService.generateRoomCode(),
    userId: this.angularFireAuth.auth.currentUser.uid,
    active: true
  }

  constructor(public navCtrl: NavController, public angularFireAuth: AngularFireAuth, public navParams: NavParams,
    private songRequestService: SongRequestService, private toast: ToastService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRoomPage');
  }

  createNewRoom(): void {
    if (this.room.name != '') {
      this.songRequestService.createRoom(this.room).then(ref => {
        this.toast.show(`The room "${this.room.name}" has been created!`);
        this.navCtrl.setRoot("DjRoomPage", { room: ref.key });
      });
    } else {
      this.toast.show("Please enter a room name.");
    }
  }
}
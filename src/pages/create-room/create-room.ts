import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    code: this.regRoom.generateRoomCode()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private regRoom: SongRequestService, private toast: ToastService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRoomPage');
  }

  createNewRoom(): void {
    this.regRoom.createRoom(this.room).then(ref => {
      this.toast.show(`The room "${this.room.name}" has been created!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key });
    });
  }
}
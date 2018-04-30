import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../services/toast/toast.service';
import { DjRoomService } from '../../services/dj-room/dj-room.service';

/**
 * Generated class for the JoinRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-room',
  templateUrl: 'join-room.html',
})
export class JoinRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public djRoomService: DjRoomService,  private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinRoomPage');
  }

  joinRoom(roomCode: string): void {
    let room = this.djRoomService.getRoomByRoomCode(roomCode).then(ref => {
      let key;
      for (key in ref) {
          break;
      }
      this.toast.show(`You have joined "${ref[key].name}"`);
      this.navCtrl.setRoot("DjRoomPage", { room: key });
    }).catch(function(error) {
      this.toast.show(error);
    });
  }
}

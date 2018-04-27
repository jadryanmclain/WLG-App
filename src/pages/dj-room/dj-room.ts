import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DjRoomService } from '../../services/dj-room/dj-room.service';
import { ToastService } from '../../services/toast/toast.service';
import { Room } from '../../models/room.model';

/**
 * Generated class for the DjRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dj-room',
  templateUrl: 'dj-room.html',
})
export class DjRoomPage {
  roomRef: string = this.navParams.get('room');
  roomName: string = '';
  roomCode: string = '';
  isActiveUserRoomCreator: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, public djRoomService: DjRoomService, private toast: ToastService) {}

  ionViewDidLoad() {
    this.djRoomService.getRoom(this.roomRef).then(result => {
      console.log("return from room: " , result);
      this.roomName = result.name;
      this.roomCode = result.code;


      if (this.angularFireAuth.auth.currentUser.uid == result.userid) {
        this.isActiveUserRoomCreator = true;
        console.log("current user IS JESUS");
      } else {
        this.isActiveUserRoomCreator = false;
        console.log("current user did not create room");
      }
    }).catch(error => {
      this.toast.show(error);
    });
  }

  closeRoom(): void {
    this.navCtrl.setRoot("HomePage");
    this.toast.show("Room " + this.roomName + " has been closed.");
    this.djRoomService.closeRoom(this.roomRef);
  }
  leaveRoom(): void {
    this.navCtrl.setRoot("HomePage");
    this.toast.show("You have left " + this.roomName + ".");
  }
  goToRequestPage(): void {
    this.navCtrl.push("AddSongRequestPage", { code: this.roomCode , user: this.angularFireAuth.auth.currentUser.uid});
  }
}

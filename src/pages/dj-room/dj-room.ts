import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DjRoomService } from '../../services/dj-room/dj-room.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public djRoomService: DjRoomService) {}

  ionViewDidLoad() {
    console.log("This is the room object plz", this.djRoomService.getRoomName(this.roomRef));
  }

}

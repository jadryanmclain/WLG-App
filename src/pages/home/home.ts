import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SongRequestService } from '../../services/song-request/song-request.service';
import { Observable } from 'rxjs/Observable';
import { SongRequest } from '../../models/song-request.model';
import { Room } from '../../models/room.model';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songsList$: Observable<Item[]>;
  bandsList$: Observable<Item[]>;
  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController, private songRequestService: SongRequestService) {
    //get the snapshot changes for key and value
    this.songsList$ = this.songRequestService.getSongRequestList().snapshotChanges().map(changes => { 
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val()
        }));
      });
  }
  ionViewWillLoad() {
    this.bandsList$ =  this.songRequestService.getBandsList().snapshotChanges().map(changes => { 
      return changes.map(c => ({
        key: c.payload.key, 
        ...c.payload.val()
      }));
    });
   
    console.log('current band: ' + this.band.name);
  }
  onContextChange(ctxt: string): void {
   this.songsList$ = this.songRequestService.assembleFilteredList(ctxt).snapshotChanges().map(changes => { 
    return changes.map(c => ({
      key: c.payload.key, 
      ...c.payload.val()
    }));
  });
  }

  showAllSongs(){
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => { 
      return changes.map(c => ({
        key: c.payload.key, 
        ...c.payload.val()
      }));
    });
  }
}

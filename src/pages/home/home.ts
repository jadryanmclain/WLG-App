import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SongsService } from '../../services/songs/songs.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item.model';
import { Band } from '../../models/band.model';



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

  constructor(public navCtrl: NavController, private songsService: SongsService) {
    //get the snapshot changes for key and value
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => { 
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val()
        }));
      });
  }
  ionViewWillLoad() {
    this.bandsList$ =  this.songsService.getBandsList().snapshotChanges().map(changes => { 
      return changes.map(c => ({
        key: c.payload.key, 
        ...c.payload.val()
      }));
    });
   
    console.log('current band: ' + this.band.name);
  }
  onContextChange(ctxt: string): void {
   this.songsList$ = this.songsService.assembleFilteredList(ctxt).snapshotChanges().map(changes => { 
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

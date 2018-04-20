import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SongRequest } from '../../models/song-request.model';
import { Room } from '../../models/room.model';

@Injectable() //don't leave this out! Need or you get dependencies error, not in video
export class SongRequestService {
    
   
    private songRequestListRef = this.db.list<SongRequest>('song-request');
    private roomRef = this.db.list<Room>('room');

    constructor(private db: AngularFireDatabase) {
    }

    getSongRequestList() {
        return this.songRequestListRef;
    }
    addRequest(song: SongRequest) {
        return this.songRequestListRef.push(song);
    }
    removeRequest(song: SongRequest) {
        return this.songRequestListRef.remove(song.key);
    }



    
    // filterByBand(band: Band){
    //     return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band.name));
    // }
    // filterByString(band: string) {
    //     return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band));
    // }
    // assembleFilteredList(ctxt): any {
    //     //we need strings with band names to querry the database, so first we get those:
    //     // console.log("Context change returning: " + JSON.stringify(ctxt));
    //     // console.log("Context change returning: " + ctxt);
    //     // var bandsFilter = JSON.stringify(ctxt);
    //     //console.log("Split string:" + bandsFilter.split(/\s*,\s*/));
    //     //bandsFilter = bandsFilter.replace(/(\r\n\t|\n|\r\t)/gm,"");
    //     //console.log("Replace string:" + bandsFilter);
    
    //     //var emails = bandsFilter.replace("\n","").split("/\s*,\s*/");
    //     var bandName = '';
    //     //console.log("String returned: " + ctxt);

    //     //for (var i = 0; i < ctxt.length; i++) {
    //     //console.log("String returned: " + ctxt[i]);
    //       bandName = ctxt;
    //       bandName = bandName.substring(13);
    //       bandName = bandName.trim();
    //       bandName = bandName.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    //     //}
    //     //   for(var x = 0; x < ctxt[i].length; x++) {
    //     //       console.log("i = " + x + " " + bandName[x]);
    //     //   }
    //     //  console.log("bandName: " + bandName);
    //     return(this.filterByString(bandName));
    // }

    // editItem(item: Item) {
    //     return this.songListRef.update(item.key, item);
    // }
}
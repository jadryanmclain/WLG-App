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

    getSongRequestList(roomCode: string) {
        return this.songRequestListRef;
    }
    
    addRequest(song: SongRequest) {
        return this.songRequestListRef.push(song);
    }

    // TO-DO: does not work correctly
    removeRequest(song: SongRequest) {
        console.log('silly child, you cannot delete me');
        // return this.songRequestListRef.remove(song.key);
    }

    createRoom(room: Room) {
        return this.roomRef.push(room);
    }
    generateRoomCode() {
        var code = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            code += possible.charAt(Math.floor(Math.random() * possible.length));

        return code;
    }
}
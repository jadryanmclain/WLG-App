import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseReference, AngularFireList } from 'angularfire2/database';
import { Room } from '../../models/room.model';
import { SongRequest } from '../../models/song-request.model';
import { Observable } from '@firebase/util';

@Injectable() 
export class DjRoomService {
    roomRef = this.db.database.ref('room');
    songReq = this.db.list<SongRequest>('song-request');
    songRef = this.db.database.ref('song-request');

    constructor(private db: AngularFireDatabase) {
    }

    getRoom(roomId: string): Promise<Room> {
        return new Promise((resolve, reject) => {
            let roomData;
            this.roomRef.orderByKey().equalTo(roomId).on('value', function(snapshot) {
                let room = snapshot.val();
                let key;
                for (key in room) {
                    break;
                }
                resolve(room[key]);
            });
        });
    }

    getRoomByRoomCode(roomCode: string): Promise<Room> {
        return new Promise((resolve, reject) => {
            this.roomRef.orderByChild('code').equalTo(roomCode).on('value', function(snapshot) {
                resolve(snapshot.val());
            });
        });
    }
    
    getSongRequestsByRoom(roomCode: string) {
        var obj;
        var songsInRoom = this.songRef.orderByChild('roomCode').equalTo(roomCode).on('child_added', function(snapshot) {
            obj = snapshot.val();
        });
        return obj;
    }

    closeRoom(roomId: string): void {
        this.db.database.ref('/room/' + roomId).update({
            active: false
        });
    }
}
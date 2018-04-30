import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Room } from '../../models/room.model';
import { SongRequest } from '../../models/song-request.model';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class DjRoomService {
    roomRef = this.db.database.ref('room');
    songReq = this.db.list<SongRequest>('song-request');
    songRef = this.db.database.ref('song-request');
    roomObservables: Observable<SongRequest>[] = [];

    constructor(private db: AngularFireDatabase) {
    }

    getRoom(roomId: string): Promise<Room> {
        return new Promise((resolve, reject) => {
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
    
    initRoomList(roomCode: string): Observable<SongRequest[]> {
        if (!!this.roomObservables[roomCode]) return this.roomObservables[roomCode];
        else {
            this.roomObservables[roomCode] = this.db.list<SongRequest[]>('song-request', ref => ref.orderByChild('roomCode').equalTo(roomCode)).valueChanges();
            return this.roomObservables[roomCode];
        }
    }

    closeRoom(roomId: string): void {
        this.db.database.ref('/room/' + roomId).update({
            active: false
        });
    }
}
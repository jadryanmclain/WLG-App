import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseReference } from 'angularfire2/database';
import { Room } from '../../models/room.model';

@Injectable() 
export class DjRoomService {
    roomRef: DatabaseReference = this.db.database.ref('/room');

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

    getSongRequestsByRoom(roomId: string): Promise<Room> {
        return new Promise((resolve, reject) => {
            // TO-DO
            let requestList;
            resolve(requestList);
        });
    }

    closeRoom(roomId: string): void {
        this.db.database.ref('/room/' + roomId).update({
            active: false
        });
    }
}
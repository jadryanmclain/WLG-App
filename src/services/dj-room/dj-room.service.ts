import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseReference } from 'angularfire2/database';
import { Room } from '../../models/room.model';

@Injectable() 
export class DjRoomService {
    public roomRef: DatabaseReference = this.db.database.ref('/room');
    public room = {};

    constructor(private db: AngularFireDatabase) {
    }

    getRoomName(roomId: string) {
        let roomList;
        this.roomRef.on('value', function(snapshot) {
            roomList = snapshot.val();
            console.log(roomList);
        });
        // return roomData;
    }
}
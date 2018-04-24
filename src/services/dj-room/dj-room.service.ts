import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule, DatabaseReference } from 'angularfire2/database';
import { Room } from '../../models/room.model';
import { DataSnapshot } from '@firebase/database';

@Injectable() 
export class DjRoomService {
    public roomRef: DatabaseReference = this.db.database.ref('/room');
    public room = {};

    constructor(private db: AngularFireDatabase, private dbModule: AngularFireDatabaseModule) {

       // this.rooms = db.database.ref('/room');
        
        

    }

    getRoomName(roomName: string) {
        //this.rooms = this.db.list('room', 
        //ref => ref.orderByChild('name'));
        this.roomRef.on('value', DataSnapshot => {
            this.room = DataSnapshot.val();
        });

        console.log('The right one' , this.room);
    }
}
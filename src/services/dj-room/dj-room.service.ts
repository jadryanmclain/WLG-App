import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Room } from '../../models/room.model';

@Injectable() 
export class DjRoomService {
    private roomRef = this.db.list<Room>('room');

    constructor(private db: AngularFireDatabase) {}

    getRoomName(roomId: string) {
        let roomData = this.db.list<Room>('room', ref => ref.orderByChild("name").equalTo(roomId));
        return roomData;
    }
}
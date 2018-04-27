import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseReference, AngularFireList } from 'angularfire2/database';
import { Room } from '../../models/room.model';
import { SongRequest } from '../../models/song-request.model';

@Injectable() 
export class DjRoomService {
    roomRef: DatabaseReference = this.db.database.ref('/room');
    private songReq = this.db.list<SongRequest>('/song-request');

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

    getSongRequestsByRoom(roomCode: string): Promise <AngularFireList<SongRequest>> {
        return new Promise((resolve, reject) => {
            resolve (this.db.list('/song-request', ref => ref.orderByChild('roomCode').equalTo(roomCode)));
            // this.songReq.orderByChild('roomCode').equalTo(roomCode).on('child_added', function(snapshot) {
            //     let requestList = snapshot.val();
            //     let key;
            //     for (key in requestList) {
            //         break;
            //     }
            //     resolve(requestList[key]);
            // });     
        });
    }

    closeRoom(roomId: string): void {
        this.db.database.ref('/room/' + roomId).update({
            active: false
        });
    }

    getRoomByRoomCode(roomCode: string): Promise<Room> {
        return new Promise((resolve, reject) => {
            // let roomData;
            // this.roomRef.orderByKey().equalTo(roomCode).on('value', function(snapshot) {
            //     let room = snapshot.val();
            //     let key;
            //     for (key in room) {
            //         break;
            //     }
            //     resolve(room[key]);
            // });
        });
    }
}
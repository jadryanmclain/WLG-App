import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user.model';

@Injectable() 
export class UserService {

    private userRef = this.db.list<User>('user');

    constructor(private db: AngularFireDatabase) {
    }

    setUserName (user : User) : void {
        this.userRef.push(user);
    }

}
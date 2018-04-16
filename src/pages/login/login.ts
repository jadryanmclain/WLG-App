import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(email, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      this.toast.show("user" + email + " added!");
      this.navCtrl.setRoot('RegisterBandPage', {email});
    });
  }

  login(username, password) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(username, password)
      .then((user) => {
        this.toast.show("user" + username + "logged in!");
        this.navCtrl.setRoot('HomePage', {username});
      });
  }


}

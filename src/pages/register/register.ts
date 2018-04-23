import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(email, username, password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      this.toast.show("user" + email + " added!");
      this.navCtrl.setRoot('HomePage', {email});
    })
    .catch(error => {
      this.toast.show(error);
    });
  }

  cancelRegistration() {
    this.navCtrl.pop()
    .catch(error => {
      this.navCtrl.setRoot("LoginPage");
    });
  }


}



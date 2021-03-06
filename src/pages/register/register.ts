import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../services/toast/toast.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

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

  user: User = {
    username: '',
    userId: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth, private toast: ToastService, private userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(email, username, password) {
    if (email == null) {
      this.toast.show('All fields must be filled')
    } else if (password ==  null) {
      this.toast.show("All fields must be filled")
    }else if (username == null) {
      this.toast.show("All fields must be filled")
    }else {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.user.userId = this.angularFireAuth.auth.currentUser.uid;
        this.user.username = username;
        this.userService.setUserName(this.user);
        this.toast.show("User " + email + " added!");
        this.navCtrl.setRoot('HomePage', {email});
      })
      .catch(error => {
        this.toast.show(error);
      });
    }
  }

  cancelRegistration() {
    this.navCtrl.pop()
    .catch(error => {
      this.navCtrl.setRoot("LoginPage");
    });
  }


}



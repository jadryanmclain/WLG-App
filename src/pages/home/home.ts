import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ToastService } from '../../services/toast/toast.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Room } from '../../models/room.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public angularFireAuth: AngularFireAuth, private toast: ToastService) {}
  
  Logout(): void {
    var curPage = this;
    this.navCtrl.setRoot('LoginPage');
    
    this.angularFireAuth.auth.signOut().then(function() {
      curPage.toast.show("Logged out");
    }).catch(function(error) {
      // console.log(error);
      console.log(error);
    });
  }
}

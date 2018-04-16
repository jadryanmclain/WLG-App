import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../services/toast/toast.service';
import { rootRenderNodes } from '@angular/core/src/view';

@Component({
  //templateUrl: 'app.html'
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    @ViewChild('myNav') nav: NavController
     public rootPage: string = 'LoginPage';
      
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      angularFireAuth.auth.onAuthStateChanged(function (user)
      {
        console.log("User status: " + user);
        if (user) {
          //TODO: Set root page to home if user is logged in
          console.log("User Logged in: " + user.email);
          this.rootPage = 'HomePage';
          //this.nav.push('HomePage');
        } else {
          //TODO: send user to login page
          console.log("Not logged in");
          this.rootPage = 'LoginPage';
          //this.nav.push('LoginPage');
        }
      });
    });
  }
  ngOnInit() {
    // Let's navigate from TabsPage to Page1
    this.nav.push(this.rootPage);
 }
}


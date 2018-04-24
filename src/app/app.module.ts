import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ToastService } from '../services/toast/toast.service';
import { SongRequestService } from '../services/song-request/song-request.service';
import { DjRoomService } from '../services/dj-room/dj-room.service';
import { UserService } from '../services/user/user.service';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CreateRoomPage } from '../pages/create-room/create-room';
import { DjRoomPage } from '../pages/dj-room/dj-room';

@NgModule({
  declarations: [
    MyApp,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastService,
    SongRequestService,
    DjRoomService,
    UserService,
    AngularFireAuth,
    EmailComposer,
    Camera,
    MediaCapture,
    InAppBrowser
    ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  // currentImage = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private camera: Camera, private emailComposer: EmailComposer) {
  }
  // captureImage() {
  //   const options: CameraOptions = {
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //   }
 
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.currentImage = imageData;
  //   }, (err) => {
  //     // Handle error
  //     console.log('Image error: ', err);
  //   });
  // }
 
  sendEmail() {
    let email = {
      to: '',
      cc: '',
      attachments: [
        // this.currentImage
      ],
      subject: 'Join the band on LyriChord',
      body: 'Get the LyriChord app and login to see and edit our band songs',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

}

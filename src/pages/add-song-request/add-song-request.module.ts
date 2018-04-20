import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSongRequestPage } from './add-song-request';

@NgModule({
  declarations: [
    AddSongRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSongRequestPage),
  ],
})
export class AddSongRequestPageModule {}

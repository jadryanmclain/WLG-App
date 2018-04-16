import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBandPage } from './register-band';

@NgModule({
  declarations: [
    RegisterBandPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBandPage),
  ],
})
export class RegisterBandPageModule {}

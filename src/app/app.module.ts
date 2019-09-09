import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ProfileComponent } from './profile/profile.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCQgroTi7TRCcu0Zy3MT0THAES37nxz6fE',
  authDomain: 'fly-sklep.firebaseapp.com',
  databaseURL: 'https://fly-sklep.firebaseio.com',
  projectId: 'fly-sklep',
  storageBucket: '',
  messagingSenderId: '182079410714',
  appId: '1:182079410714:web:aa13887b7a708ee70ff7a3'
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

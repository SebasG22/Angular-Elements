import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { UserPollComponent } from './user-poll/user-poll.component';

const config = {
  apiKey: 'AIzaSyBHSKHd7QaeS_F3IYFMvNvGeWgrwUHq-F4',
  authDomain: 'myapp-3087e.firebaseapp.com',
  databaseURL: 'https://myapp-3087e.firebaseio.com',
  projectId: 'myapp-3087e',
  storageBucket: 'myapp-3087e.appspot.com',
  messagingSenderId: '284572120270'
};
@NgModule({
  declarations: [
    UserPollComponent
  ],
  entryComponents: [
    UserPollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(UserPollComponent, { injector: this.injector });
    customElements.define('user-poll', el);
  }

  ngDoBootstrap() {
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { UserPollComponent } from './user-poll/user-poll.component';

@NgModule({
  declarations: [
    UserPollComponent
  ],
  entryComponents: [
    UserPollComponent
  ],
  imports: [
    BrowserModule
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatBodyComponent,
    ChatBoxComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

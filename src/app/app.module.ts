import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DislikeComponent} from './Dislike/dislike.component';
import {LikeComponent} from './Like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    DislikeComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

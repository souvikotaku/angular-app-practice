import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBody } from './mainbody/mainbody.component';
import { BodytextComponent } from './mainbody/components/bodytext/bodytext.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainBody, BodytextComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MockpageComponent } from './components/mockpage/mockpage.component';
import { MapmockComponent } from './components/mapmock/mapmock.component';
import { AboutmockComponent } from './components/aboutmock/aboutmock.component';
import { LeaderboardmockComponent } from './components/leaderboardmock/leaderboardmock.component';
import { ProfilmockComponent } from './components/profilmock/profilmock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MockpageComponent,
    MapmockComponent,
    AboutmockComponent,
    LeaderboardmockComponent,
    ProfilmockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

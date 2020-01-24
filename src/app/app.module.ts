import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { environment } from 'src/environments/environment';
import { ShitterceptorService } from './services/shitterceptor/shitterceptor.service';

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
    ProfilmockComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmApiKey
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ShitterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

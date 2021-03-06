import { UserProfileService } from './services/user-profile-service/user-profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MapPageComponent } from './components/map-page/map-page.component';
import { ShitterceptorService } from './services/shitterceptor/shitterceptor.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './components/profil/profil.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MapPageComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    LeaderBoardComponent,
    ProfilComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmApiKey
    }),
    AgmJsMarkerClustererModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ShitterceptorService, multi: true},
    FormsModule,
    HttpClientModule,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

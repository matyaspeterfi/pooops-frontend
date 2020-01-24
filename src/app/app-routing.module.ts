import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LeaderboardmockComponent } from './components/leaderboardmock/leaderboardmock.component';
import { ProfilmockComponent } from './components/profilmock/profilmock.component';
import { AboutmockComponent } from './components/aboutmock/aboutmock.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/auth-guard/authguard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent,
    canActivate: [AuthguardService],
    children: [{
      path: '', component: MapPageComponent,
    }, {
      path: 'profil', component: ProfilmockComponent,
    }, {
      path: 'leaderboard', component: LeaderboardmockComponent,
    }, {
      path: 'about', component: AboutmockComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

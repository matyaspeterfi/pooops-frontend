import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

import { LeaderboardmockComponent } from './components/leaderboardmock/leaderboardmock.component';
import { ProfilmockComponent } from './components/profilmock/profilmock.component';
import { MapmockComponent } from './components/mapmock/mapmock.component';
import { AboutmockComponent } from './components/aboutmock/aboutmock.component';
import { MockpageComponent } from './components/mockpage/mockpage.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: MockpageComponent },
  { path: 'register', component: MockpageComponent },
  { path: 'home', component: HomepageComponent, 
    children: [{
      path: '', component: MapmockComponent
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

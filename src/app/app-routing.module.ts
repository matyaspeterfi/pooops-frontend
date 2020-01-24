import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/auth-guard/authguard.service';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent,
    canActivate: [AuthguardService],
    children: [{
      path: '', component: MapPageComponent,
    }, {
      path: 'profile', component: ProfilComponent,
    }, {
      path: 'leaderboard', component: LeaderBoardComponent,
    }, {
      path: 'about', component: AboutComponent,
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

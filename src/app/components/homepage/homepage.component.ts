import { UserProfileService } from './../../services/user-profile-service/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: any;
  selected: string;
  state: string;

  constructor(private router: Router, private _getSingleUser: UserProfileService) {
    this._getSingleUser.getProfile()
    .subscribe(data => this.user = data);
    this.router.events.subscribe((event) => {
      if (event) {
        if (document.location.pathname == '/home/profile') {
          this.selected = this.user.username
        } else if (document.location.pathname != '/home'){
          this.selected = document.location.pathname.split('/home/')[1]
        } else {
          this.selected = 'pOoops';
        }  
      }
    });
  }

  ngOnInit() { 
  }
}

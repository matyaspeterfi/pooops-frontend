import { UserProfileService } from '../../services/user-profile-service/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  private _user: any;

  constructor(private _getSingleUser: UserProfileService) {
    this._getSingleUser.getProfile()
      .subscribe(data => this._user = data);
  }
  ngOnInit() {
  }

  public get user(): any {
    return this._user;
  }
}

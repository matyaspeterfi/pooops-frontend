import { Component, OnInit } from '@angular/core';
import { Shit } from 'src/app/models/shit';
import { ShitService } from 'src/app/services/shit-service/shit.service';
import { UserProfileService } from 'src/app/services/user-profile-service/user-profile.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  oldestShits: Shit[];
  topCleaners: User[];
  topPoopers: User[];

  constructor(private getOldShits: ShitService, private getTopCleaners: UserProfileService, private getTopPoopers: UserProfileService) {
    this.getOldShits.getOldShits()
      .subscribe(data => {
        this.oldestShits = data;
      });
    this.getTopCleaners.getTopCleaners()
      .subscribe(data => {
        this.topCleaners = data;
      });
    this.getTopPoopers.getTopPoopers()
      .subscribe(data => {
        this.topPoopers = data;
      });
  }

  ngOnInit() {
  }

  displayOldestShits() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Shit } from 'src/app/models/shit';
import { ShitService } from 'src/app/services/shit-service/shit.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  oldestShits: Shit[];

  constructor(private getOldShits: ShitService) {
    this.getOldShits.getOldShits()
      .subscribe(data => {
        this.oldestShits = data;
      });
  }

  ngOnInit() {
  }

  displayOldestShits() {

  }

}

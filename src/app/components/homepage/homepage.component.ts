import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  selected: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event) {
        if (document.location.pathname != '/home') {
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

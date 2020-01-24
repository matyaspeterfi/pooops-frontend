import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() selected: string;
  auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
   }

  ngOnInit() {
  }

}

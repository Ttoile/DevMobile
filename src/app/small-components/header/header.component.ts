import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: String;

  connected: boolean;
  userName: String;

  constructor(private authServ : AuthService, private router: Router) {
  }

  ngOnInit() {
    this.connected = this.authServ.isConnected();
    this.userName = this.authServ.getUsername();
  }

}

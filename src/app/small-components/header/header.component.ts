import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: String;

  connected: boolean;
  userName: String;

  canGoBack: boolean;

  pc: boolean;

  constructor(private authServ : AuthService, private router: Router, private platform: Platform, private location: Location) {
  }

  ngOnInit() {
    this.pc = this.platform.is("desktop");
    this.authServ.getLoggedInName.subscribe(event => {this.userName = event});
    this.connected = this.authServ.isConnected();
    this.userName = this.authServ.getUsername();
    if(this.router.url !== '/listslist' && this.router.url !== '/login')
      this.canGoBack = true;
    else
      this.canGoBack = false;
  }

  previousPage(){
    this.location.back();
  }

  logout(){
    this.authServ.logout();
  }

}

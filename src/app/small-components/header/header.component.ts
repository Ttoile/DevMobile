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

  canGoBack: boolean;

  constructor(private authServ : AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authServ.getLoggedInName.subscribe(event => {this.userName = event});
    this.connected = this.authServ.isConnected();
    this.userName = this.authServ.getUsername();
    if(this.router.url !== '/listslist')
      this.canGoBack = true;
    else
      this.canGoBack = false;
  }

  previousPage(){
    this.router.navigate(['listslist']);
  }

  reload(){
    window.location.reload();
  }

  logout(){
    this.authServ.logout();
  }

}

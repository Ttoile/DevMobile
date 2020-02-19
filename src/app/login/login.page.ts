import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authServ : AuthService) {

  }

  ngOnInit() {
  }

  logIn(log: string, mdp: string){
    this.authServ.login(log, mdp);
  }

}

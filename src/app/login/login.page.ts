import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private hideErrMessage: boolean;
  constructor(private authServ : AuthService) {
    this.hideErrMessage=true;
  }

  ngOnInit() {
  }

  logIn(log: string, mdp: string){
    this.authServ.login(log, mdp).then(value =>
      {
      console.log('Nice, it worked!');
      this.hideErrMessage = true;
    }).catch(err =>
      {
      console.log('Something went wrong:',err.message);
      this.hideErrMessage = false;
    });
  }

}

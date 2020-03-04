import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private hideErrMessage: boolean;
  constructor(private authServ : AuthService, private router: Router) {
    this.hideErrMessage=true;
  }

  ngOnInit() {
  }

  logIn(log: string, mdp: string){
    this.authServ.login(log, mdp).then(value =>
      {
      console.log('Nice, it worked!');
      this.hideErrMessage = true;
      this.router.navigate(['todoslist']);
    }).catch(err =>
      {
      console.log('Something went wrong:',err.message);
      this.hideErrMessage = false;
    });
  }
}

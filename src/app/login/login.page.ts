import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';
import {Router} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private hideErrMessage: boolean;
  private hideMailVerifMessage: boolean;
  private hideMailResent: boolean;
  private errMessage: String;
  private mailVerifMessage: string;
  constructor(private authServ : AuthService, private router: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.hideErrMessage=true;
    this.hideMailVerifMessage =true;
    this.hideMailResent =true;
    this.errMessage = "";
  }

  logIn(log: string, mdp: string){
    this.authServ.login(log, mdp).then(value =>
      {
        this.hideErrMessage = true;
        if(value.user.emailVerified){
          this.hideMailVerifMessage = true;
          this.router.navigate(['listslist']);
        }else{
          this.hideMailVerifMessage = false;
          this.authServ.logout();
        }
    }).catch(err =>
      {
      console.log('Something went wrong:',err.message);
      this.errMessage = err.message;
      this.hideErrMessage = false;
    });
  }

  resendVerif(log: string, mdp: string){
    this.authServ.login(log, mdp).then(value =>{
      if(value.user.emailVerified){
        this.authServ.logout();
      }else{
        this.authServ.sendEmailVerif();
        this.authServ.logout();
        this.hideMailResent = false;
      }
    });
    setTimeout(() => {this.hideMailResent = true; this.hideMailVerifMessage = true;}, 5000);
  }
}

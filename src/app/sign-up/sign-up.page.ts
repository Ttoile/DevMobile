import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private hideErrMessage:boolean;
  private errMessage:String;
  constructor(private authServ:AuthService, private router: Router) { }

  ngOnInit() {
    this.hideErrMessage = true;
    this.errMessage = "";
  }

  signUp(log: string, mdp: string, conflog: string, confmdp: string){
    //this.authServ.login(log, mdp);
    if(log !== conflog){
      // console.log("Les deux adresse mails doivent être les même");
      this.hideErrMessage = false;
      this.errMessage = "Les deux adresse mails doivent être les même";
    }else if(mdp !== confmdp){
      // console.log("Les mots de passe doivent correspondrent");
      this.hideErrMessage = false;
      this.errMessage = "Les mots de passe doivent correspondrent";
    }else{
      this.authServ.signup(log, mdp).then(value => {
                console.log('Success!', value);
                this.hideErrMessage = true;
                this.router.navigate(['/login']);
              })
              .catch(err => {
                this.hideErrMessage = false;
                this.errMessage = err.message;
                console.log('Something went wrong:',err.message);
              });
    }
  }
}
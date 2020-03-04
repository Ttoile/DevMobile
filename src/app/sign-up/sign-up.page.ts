import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private authServ:AuthService) { }

  ngOnInit() {
  }

  signUp(log: string, mdp: string, conflog: string, confmdp: string){
    //this.authServ.login(log, mdp);
    if(log !== conflog){
      console.log("Les deux adresse mails doivent être les même");
    }else if(mdp !== confmdp){
      console.log("Les mots de passe doivent correspondrent");
    }else{
      this.authServ.signup(log, mdp);
    }
  }
}

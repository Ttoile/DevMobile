import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private hideErrMessage:boolean;
  private errMessage:String;
  private hideSuccessMessage:boolean;
  private successMessage:string;
  private timeBeforeMessagesDisapear = 5000;
  constructor(private authServ:AuthService, private users: UsersService, private router: Router) { }

  ngOnInit() {
    this.hideErrMessage = true;
    this.hideSuccessMessage = true;
    this.errMessage = "";
    this.successMessage = "A verification email has been sent. You're going to be redirected in "+this.timeBeforeMessagesDisapear/1000 + "s.";
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
                this.authServ.sendEmailVerif();
                const newUser = {email:log,uid:this.authServ.getUserID()}
                this.users.addUser(newUser);
                this.hideErrMessage = true;
                this.hideSuccessMessage =false;
                setTimeout(() => {this.hideSuccessMessage = true; this.router.navigate(['/login'])}, this.timeBeforeMessagesDisapear);
              })
              .catch(err => {
                this.hideErrMessage = false;
                this.errMessage = err.message;
                console.log('Something went wrong:',err.message);
              });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {

  private timeBeforeMessagesDisapear = 5000;

  hideErrMessage: boolean;
  hideSuccessMessage: boolean;
  errMessage = "";
  successMessage = "";

  constructor(private authServ: AuthService, private router: Router) {
    this.hideErrMessage = true;
    this.hideSuccessMessage = true;
  }

  ngOnInit() {
  }

  recoverPassword(mail: string){
    this.authServ.resetPassword(mail)
      .then(event => {
        this.successMessage = "An email has been sent to reset your password.\n You're going to be redirected in "+this.timeBeforeMessagesDisapear/1000 + "s.";
        this.hideSuccessMessage =false;
        setTimeout(() => {this.hideSuccessMessage = true;this.router.navigate(['login']);}, this.timeBeforeMessagesDisapear);
      })
      .catch(err => {
        this.errMessage = err.message;
        this.hideErrMessage = false;
        setTimeout(() => {this.hideErrMessage = true},this.timeBeforeMessagesDisapear);
      });
  }

}

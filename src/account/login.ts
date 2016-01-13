import {Redirect} from 'aurelia-router';

export class Login{
  heading = 'Login';
  username = '';
  password = '';
  rememberMe = false;
  errorMessages = [];

  submit(){
    if (this.username === '') { this.errorMessages.push('Username is required.');}
  }

}

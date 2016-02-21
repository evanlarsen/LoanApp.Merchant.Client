import {Redirect} from 'aurelia-router';
import {Http, json} from 'infrastructure/http';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Login{
  heading = 'Login';
  email = '';
  password = '';
  rememberMe = false;
  errorMessages = [];
  isLoggingIn = false;

  constructor(private http: Http){
  }

  submit(){
    if (!this.isValid()){
      return;
    }
    const credentials = {
      email: this.email,
      password: this.password
    };
    this.isLoggingIn = true;
    this.http.fetch('account/login', {
      method: 'post',
      body: json(credentials)
    }).then(response => {
      this.isLoggingIn = false;
      if (response.ok){
        this.http.setCredentials(credentials.email, credentials.password);
      } else {
        response.json().then(data => {
          console.log(data);
          this.errorMessages.push(data.Message);
        })
      }
    });
  }

  facebookLogin(){
    console.log('facebook login');
  }

  isValid(): boolean{
    this.errorMessages = [];
    if (this.email === '') {
      this.errorMessages.push('Email is required.');
    }
    if (this.password === ''){
      this.errorMessages.push('Password is required.')
    }

    return this.errorMessages.length === 0;
  }

}

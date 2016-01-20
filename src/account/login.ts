import {Redirect} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Login{
  http: HttpClient;
  heading = 'Login';
  email = 'evan.larsen@gmail.com';
  password = 'test1234';
  rememberMe = false;
  errorMessages = [];

  constructor(http: HttpClient){
    http.configure(config => {
      config.withBaseUrl('http://localhost:54850/api/')
        .withDefaults({
          headers: { 'Accept': 'application/json' }
        })
    });
    this.http = http;
  }

  submit(){
    console.log({email: this.email, password: this.password});
    //if (this.email === '') { this.errorMessages.push('Username is required.');}
    this.http.fetch('account/login', {
      method: 'post',
      body: json({ email: this.email, password: this.password })
    }).then(response => response.json())
    .then(data => console.log(data));
  }

  facebookLogin(){
    console.log('facebook login');
  }

}

import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from '../infrastructure/navigation-helper';
import {Http, json} from 'infrastructure/http';

@autoinject()
export class Register {
  heading = 'Create an Account';
  email = '';
  mobile = '';
  password = '';
  isRegistering = false;
  errorMessages = [];

  constructor(private navigationHelper: NavigationHelper, private http: Http){
  }

  register(){
    if (!this.isValid()){
      return;
    }
    const info = {
      email: this.email,
      mobile: this.mobile,
      password: this.password
    };
    this.isRegistering = true;
    this.http.fetch('account/register',{
      method: 'post', body: json(info)
    }).then(response => {
      if (response.ok){
        this.http.setCredentials(info.email, info.password);
      } else {
        response.json().then(data => {
          this.errorMessages.push(data.Message);
        });
      }
    })

    this.navigationHelper.application.toBusinessInformation();
  }

  isValid(): boolean{
    this.errorMessages = [];

    if (this.email = ''){
      this.errorMessages.push('Email is required.');
    }
    if (this.password = ''){
      this.errorMessages.push('Password is required.');
    }
    if (this.mobile = ''){
      this.errorMessages.push('Mobile is required.');
    }
    return this.errorMessages.length == 0;
  }

  facebookLogin(){
    console.log('facebook login');
  }

  cancel(){
    this.navigationHelper.toHome();
  }
}

import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from '../infrastructure/navigation-helper';

@autoinject()
export class Register {
  heading = 'Create an Account';
  email = '';
  mobile = '';
  password = '';

  constructor(private navigationHelper: NavigationHelper){
  }

  register(){
    this.navigationHelper.application.toBusinessInformation();
  }

  facebookLogin(){
    console.log('facebook login');
  }

  next(){
    this.navigationHelper.application.toBusinessInformation();
  }

  cancel(){
    this.navigationHelper.toHome();
  }
}

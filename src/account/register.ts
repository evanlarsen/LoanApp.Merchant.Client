import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from '../infrastructure/navigation-helper';

@autoinject()
export class Register {
  heading = 'create an account';
  email = '';
  mobile = '';
  password = '';

  constructor(private navigationHelper: NavigationHelper){
  }

  next(){
    this.navigationHelper.application.ToBusinessInformation();
  }

  cancel(){
    this.navigationHelper.toHome();
  }
}

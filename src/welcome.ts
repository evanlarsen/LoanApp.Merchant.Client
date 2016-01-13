//import {computedFrom} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from 'infrastructure/navigation-helper';

@autoinject()
export class Welcome{
  heading = 'LendiDo';
  subHeading = 'money at your finger tips';

  constructor(public navigationHelper:NavigationHelper){
  }

  signin(){
    this.navigationHelper.account.toLogin();
  }

  register(){
    this.navigationHelper.account.toRegister();
  }
}

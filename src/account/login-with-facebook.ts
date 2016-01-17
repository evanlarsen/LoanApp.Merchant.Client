import {customElement, bindable} from 'aurelia-framework';

@customElement('login-with-facebook')
export class LoginWithFacebookControl{
  @bindable login: ()=>{};
}

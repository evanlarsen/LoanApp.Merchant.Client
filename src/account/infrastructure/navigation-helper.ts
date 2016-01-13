import {Router} from 'aurelia-router';

var root = 'account',
  login = `${root}/login`,
  register = `${root}/register`;

export const accountSiteMap = [
  {route: login, name: login, moduleId: login, title: 'Login'},
  {route: register, name: register, moduleId: register, title: 'Register'}
];

export class AccountNavigationHelper{
  constructor(public router: Router){}

  toLogin(){
    this.router.navigateToRoute(login);
  }

  toRegister(){
    this.router.navigateToRoute(register);
  }
}

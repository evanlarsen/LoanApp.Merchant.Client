import {Router} from 'aurelia-router';

var root = 'application',
  businessInformation = `${root}/business-information`;

export const applicationSiteMap = [
  {route: businessInformation, name: businessInformation, moduleId: businessInformation, title: 'Login'}
];

export class ApplicationNavigationHelper{
  constructor(public router: Router){}

  ToBusinessInformation(){
    this.router.navigateToRoute(businessInformation);
  }
}

import {Router} from 'aurelia-router';

var root = 'application',
  businessInformation = `${root}/business-information`,
  ownerInformation = `${root}/owner-information`,
  fundingRequest = `${root}/funding-request`;

export const applicationSiteMap = [
  {route: businessInformation, name: businessInformation, moduleId: businessInformation, title: 'Business'},
  {route: ownerInformation, name: ownerInformation, moduleId: ownerInformation, title: 'Owner'},
  {route: fundingRequest, name: fundingRequest, moduleId: fundingRequest, title: 'Funding'}
];

export class ApplicationNavigationHelper{
  constructor(public router: Router){}

  toBusinessInformation(){
    this.router.navigateToRoute(businessInformation);
  }

  toOwnerInformation(){
    this.router.navigateToRoute(ownerInformation);
  }

  toFundingRequest(){
    this.router.navigateToRoute(fundingRequest);
  }
}

import {autoinject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AccountNavigationHelper, accountSiteMap} from 'account/infrastructure/navigation-helper';
import {ApplicationNavigationHelper, applicationSiteMap} from 'application/infrastructure/navigation-helper';


export class SiteMap{
  public menuItems = [];

  constructor(){
    this.menuItems.push({ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' });
    this.menuItems = this.menuItems.concat(accountSiteMap);
    this.menuItems = this.menuItems.concat(applicationSiteMap);
  }
}

@autoinject()
export class NavigationHelper{

  public account: AccountNavigationHelper;
  public application: ApplicationNavigationHelper;

  constructor(public router: Router){
    this.account = new AccountNavigationHelper(router);
    this.application = new ApplicationNavigationHelper(router);
  }

  toHome(){
    this.router.navigateToRoute('welcome');
  }
}

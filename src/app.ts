import {Router, RouterConfiguration} from 'aurelia-router'
import {SiteMap} from 'infrastructure/navigation-helper'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    var sitemap = new SiteMap();
    console.log(sitemap.menuItems);
    config.map(sitemap.menuItems);

    this.router = router;
  }
}

export class PageObject_Welcome {
  pressSignInButton() {
    element(by.css('#sign-in')).click();
    return browser.waitForRouterComplete();
  }

  pressRegisterButton(){
    element(by.css('#register')).click();
    return browser.waitForRouterComplete();
  }

  getCurrentPageTitle(){
    return browser.getTitle();
  }

  getGreeting(){
    return element(by.css('h4.welcome-sub-header')).getText();
  }
}

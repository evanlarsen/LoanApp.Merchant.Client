export class PageObject_Register {
  setEmail(email){
    element(by.css('#email')).sendKeys(email);
  }

  setMobile(mobile){
    element(by.css('#mobile')).sendKeys(mobile);
  }

  setPassword(password){
    element(by.css('#password')).sendKeys(password);
  }

  clickRegisterButton(){
    element(by.css('#register')).click();
  }

  getCurrentPageTitle(){
    return browser.getTitle();
  }
}

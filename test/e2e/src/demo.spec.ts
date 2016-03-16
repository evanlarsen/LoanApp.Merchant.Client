import {PageObject_Welcome} from './welcome.po';
import {PageObject_Register} from './register.po';

describe('aurelia skeleton app', function() {
  let po_welcome: PageObject_Welcome;
  let po_register: PageObject_Register;

  beforeEach( () => {
    po_register = new PageObject_Register();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it('should load the page and display the initial page title', () => {
    expect(po_welcome.getCurrentPageTitle()).toBe('Welcome | LendiDoe');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('MONEY AT YOUR FINGER TIPS');
  });

  it('should navigate to users page', () => {
    po_welcome.pressRegisterButton();
    expect(po_register.getCurrentPageTitle()).toBe('Register | LendiDoe');
  });
});

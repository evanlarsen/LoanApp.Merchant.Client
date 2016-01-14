import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from '../infrastructure/navigation-helper';
import {Address} from 'application/common/address';
import {LegalName} from 'application/business/legal-name';
import {PhoneNumbers} from 'application/common/phone-numbers';
import {TaxInfo} from 'application/business/tax-info';
import {OnlinePresence} from 'application/business/online-presence';
import {Mortgage} from 'application/business/mortgage';

@autoinject
export class BusinessInformation{

  header = 'Business Information - Step 1 of 5'

  constructor(private navigationHelper: NavigationHelper){
  }

  address: Address;
  legalName: LegalName;
  phoneNumbers: PhoneNumbers;
  taxInfo: TaxInfo;
  onlinePresence: OnlinePresence;
  mortgage: Mortgage;

  next(){
    this.navigationHelper.application.toOwnerInformation();
  }
}

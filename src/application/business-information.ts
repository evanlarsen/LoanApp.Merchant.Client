import {Address} from 'application/business/address';
import {LegalName} from 'application/business/legal-name';
import {PhoneNumbers} from 'application/business/phone-numbers';
import {TaxInfo} from 'application/business/tax-info';
import {OnlinePresence} from 'application/business/online-presence';
import {Mortgage} from 'application/business/mortgage';

export class BusinessInformation{

  address: Address;
  legalName: LegalName;
  phoneNumbers: PhoneNumbers;
  taxInfo: TaxInfo;
  onlinePresence: OnlinePresence;
  mortgage: Mortgage;

  next(){

  }
}

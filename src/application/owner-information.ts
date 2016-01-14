import {autoinject} from 'aurelia-framework';
import {NavigationHelper} from '../infrastructure/navigation-helper';
import {Name} from 'application/owner/name';
import {PercentOwnership} from 'application/owner/percent-ownership';
import {Address} from 'application/common/address';
import {PhoneNumbers} from 'application/common/phone-numbers';
import {DateOfBirth} from 'application/owner/date-of-birth';
import {SocialSecurityNumber} from 'application/owner/social-security-number';
import {BusinessDates} from 'application/owner/business-dates';
import {CreditScore} from 'application/owner/credit-score';

@autoinject
export class OwnerInformation{
  header = 'Personal Information - Step 2 of 5';
  isShowPrincipal2 = false;
  owner1 = {
      name: Name,
      percentOwnership: PercentOwnership,
      address: Address,
      phoneNumbers: PhoneNumbers,
      dateOfBirth: DateOfBirth,
      socialSecurityNumber: SocialSecurityNumber,
      businessDates: BusinessDates
  };
  owner2 = {
      name: Name,
      percentOwnership: PercentOwnership,
      address: Address,
      phoneNumbers: PhoneNumbers,
      dateOfBirth: DateOfBirth,
      socialSecurityNumber: SocialSecurityNumber,
      businessDates: BusinessDates
  };
  creditScore: CreditScore;

  constructor(private navigationHelper: NavigationHelper){}

  addPrincipal(){
    this.isShowPrincipal2 = true;
  }

  removePrincipal(){
    this.isShowPrincipal2 = false;
  }

  next(){}

  previous(){
    this.navigationHelper.application.toBusinessInformation();
  }
}

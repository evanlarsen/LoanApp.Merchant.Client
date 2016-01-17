import {NavigationHelper} from '../infrastructure/navigation-helper';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class FundingRequest{
  header = 'Funding Request Step 3 of 5';

  constructor(private navigationHelper: NavigationHelper){
  }

  next(){
  }

  previous(){
    this.navigationHelper.application.toOwnerInformation();
  }

  attached(){
    window.scrollTo(0, 0);
  }
}

import {customElement, bindable} from 'aurelia-framework';

@customElement('yes-no-control')
export class YesNoControl{
  @bindable value;

  yes(){
    this.value = true;
  }

  no(){
    this.value = false;
  }
}

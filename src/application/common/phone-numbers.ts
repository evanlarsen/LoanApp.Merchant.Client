

export class PhoneNumbers{
  phone = '';
  fax = '';
  mobile = '';

  public toJson(){
    return {
      phone: this.phone,
      fax: this.fax,
      mobile: this.mobile
    };
  }
}

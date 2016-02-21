

export class Address{
  heading = 'Business Address';
  address = '';
  suite = '';
  city = '';
  state = '';
  zip = '';

  public toJson(){
    return {
      address: this.address,
      suite: this.suite,
      city: this.city,
      state: this.state,
      zip: this.zip
    };
  }
}

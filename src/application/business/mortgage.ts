
export class Mortgage{
  landlord = '';
  rent = '';
  leaseExpiration = '';
  contactName = '';
  contactPhone = '';
  contactFax = '';

  public toJson(){
    return {
      landlord: this.landlord,
      rent: this.rent,
      leaseExpiration: this.leaseExpiration,
      contactName: this.contactName,
      contactPhone: this.contactPhone,
      contactFax: this.contactFax
    };
  }
}

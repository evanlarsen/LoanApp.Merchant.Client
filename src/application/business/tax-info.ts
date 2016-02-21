
export class TaxInfo{
  taxId = '';
  startDate = '';
  lengthOfOwnership = 0;
  legalEntity = '';
  industryType = '';

  legalEntities = ['Corp', 'Sole Prop', 'LLC', 'Partnership'];

  public toJson(){
    return {
      taxId: this.taxId,
      startDate: this.startDate,
      lengthOfOwnership: this.lengthOfOwnership,
      legalEntity: this.legalEntity,
      industryType: this.industryType
    };
  }
}

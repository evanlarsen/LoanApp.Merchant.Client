
export class LegalName{
  name = '';
  dbaName = '';

  public toJson(){
    return {
      name: this.name,
      dbaName: this.dbaName
    };
  }
}

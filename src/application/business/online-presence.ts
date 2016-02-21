
export class OnlinePresence{
  email = '';
  website = '';

  public toJson(){
    return {
      email: this.email,
      website: this.website
    };
  }
}

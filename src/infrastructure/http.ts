import {HttpClient, json} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

export function json(body: any): Blob{
    return json(body);
}

@autoinject
export class Http{
  client: HttpClient;
  email: string;
  password: string;

  constructor(client: HttpClient){
    client.configure(config => {
      config.withBaseUrl('http://localhost:54850/api/')
        .withDefaults({
          headers: { 'Accept': 'application/json' }
        });
    });
    this.client = client;
  }

  fetch(uri: string, data?: any){
    return this.client.fetch(uri, data);
  }

  login(email: string, password: string){
    const credentials = {
      email: email,
      password: password
    };
    this.client.fetch('account/login', {
      body: json(credentials)
    }).then(response => {
      if (response.ok){
        this.setCredentials(credentials.email, credentials.password);
      }
    });
  }

  setCredentials(email: string, password: string){
    this.email = email;
    this.password = password;
    this.client.configure(config => {
      config.withDefaults({
        headers: { 'Authorization': `username=${this.email};password=${this.password}`}
      });
    });
  }

}

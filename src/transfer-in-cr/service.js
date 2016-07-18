import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../rest-service';
 
const serviceUri = 'https://bateeq-inventory-api-pinkgorilla.c9users.io/v1/inventories/docs/transfer-in';
const serviceOutUri = 'https://bateeq-inventory-api-pinkgorilla.c9users.io/v1/inventories/docs/transfer-out';
 
export class Service extends RestService{

  constructor() {
      super();
  }

  search(keyword) {
      return super.get(serviceUri);
  }

  getById(id)
  {
      var endpoint = `${serviceUri}/${id}`;
      return super.get(endpoint);
  }

  getOutByCode(code) 
  {
      var endpoint = `${serviceOutUri}?keyword=${code}`;
      return super.get(endpoint);
  }
  
  create(data)
  {
      var endpoint = `${serviceUri}`;
      return super.post(endpoint, data);
  } 
 
}

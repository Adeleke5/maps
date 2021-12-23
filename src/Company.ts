import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    lon: number
  }
  addContent() {
    return `<div>
      <h2> Company name is ${this.companyName}</h2>
      <h3> catchPhrase is ${this.catchPhrase}</h3>
    </div>`
  }
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude())
    }
  }
}
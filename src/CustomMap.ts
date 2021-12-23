import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: {
    lat: number,
    lon: number
  }
  addContent(): string;
}

export class CustomMap {
  private googleMap : google.maps.Map
  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }  
    });
  }
  addMaker (mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lon
      }
    })
    
    marker.addListener('click', () => {
      marker.setLabel(mappable.addContent())
    })
  }
}
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LocationInfo } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        resolve(new LocationInfo(success.coords.latitude, success.coords.longitude))
      }, error => {
        reject(error);
      });
    })
  }

  trackPosition() {
    return Observable.create(
      (observer) => {
        navigator.geolocation.watchPosition((pos: Position) => {
          observer.next(pos);
        }),
          () => {
            console.log('Position is not available');
          },
        {
          enableHighAccuracy: true
        }
      }
    )
  }
}

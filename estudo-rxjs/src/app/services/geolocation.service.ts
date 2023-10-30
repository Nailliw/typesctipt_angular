import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  positionObservable(): Observable<GeolocationCoordinates> {
    return new Observable((subs) => {
      const { geolocation } = navigator;

      let watchId: number;

      if (geolocation) {
        watchId = geolocation.watchPosition((pos) => {
          subs.next(pos.coords);
        }, (err) => {
          subs.error(err);
        })
      } else {
        subs.error(new Error("Geolocation não encontrado."))
      }

      return () => {
        geolocation.clearWatch(watchId);
      }
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'estudo-rxjs';
  showClock: boolean = true;
  coordenadas?: GeolocationCoordinates;
  inscricao?: Subscription;

  alternar() {
    this.showClock = !this.showClock;
  }

  constructor(private geolocation: GeolocationService) { }


  ngOnInit(): void {
    this.inscricao = this.geolocation.positionObservable().subscribe({
      next: (coords) => this.coordenadas = coords
      , error(err) {
        alert(err.message);
      },
    });
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }
}

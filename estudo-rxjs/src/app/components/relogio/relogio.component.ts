import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent {
  hoje: Date = new Date();
  subs?: Subscription;

  ngOnInit(): void {
    this.subs = interval(1000).subscribe({
      next: () => {
        this.hoje = new Date();

        console.warn(`Horário: ${this.hoje.toLocaleString()}`)
      }
    })
  }

  ngOnDestroy(): void {
    console.log("DESTRUIDO")
    this.subs?.unsubscribe();
  }
}

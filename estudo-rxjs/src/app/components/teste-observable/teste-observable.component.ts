import { Component } from '@angular/core';
import { Observable, filter, first, from, last, of } from 'rxjs';

@Component({
  selector: 'app-teste-observable',
  templateUrl: './teste-observable.component.html',
  styleUrls: ['./teste-observable.component.css']
})
export class TesteObservableComponent {
  constructor() {
    // this.testeObservable();

    // this.testeOperadoresCriacao();
    this.testeOperadoresFiltragem()
  }

  testeOperadoresCriacao() {
    const obs = from([1, 2, 3.4]);
    obs.subscribe({
      next(value) {
        console.log(`Valor recebido obs ${value}`);
      },
    });

    const obs2 = of(1, 2, 3, 4);

    obs2.subscribe({
      next(value) {
        console.log(`Valor recebido obs2 ${value}`);

      },
    })
  }

  testeObservable() {
    console.log("Observable.")

    const obs: Observable<number> = new Observable<number>((subscriber) => {
      setTimeout(() => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        const randomNumber = Math.floor(Math.random() * 100);

        if (randomNumber % 2 == 0) {
          subscriber.error(`O número é ${randomNumber} é par.`);
        }
        subscriber.next(randomNumber);
        subscriber.complete();
      }, 1500);


    });

    obs.subscribe({
      next: (value) => {
        console.warn(`Received ${value}`)
      },
      complete() {
        console.info('Completou')
      },
      error(err) {
        console.error('Erro: ', err)
      },
    });

    console.log("TESTE")
  }

  testeOperadoresFiltragem() {
    const obs = from([1, 23, 4, 6,])

    obs.pipe(first()).subscribe({
      next(value) {
        console.warn(value)
      },
    })

    obs.pipe(last()).subscribe({
      next(value) {
        console.warn(value)
      },
    })

    obs.pipe(filter((num) => num >= 2)).subscribe({
      next(value) {
        console.warn(value)

      },
    })
  }
}

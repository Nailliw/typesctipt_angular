import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiteTexto'
})
export class LimiteTextoPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    return this.limitador(value, limit);
  }

  limitador(text: string, delimiter?: number) {
    if (delimiter) {
      return `${text.substring(0, delimiter)} ...`;
    }
    else {
      return text;
    }
  }

}

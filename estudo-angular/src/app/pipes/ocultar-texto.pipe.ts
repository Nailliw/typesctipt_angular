import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarTexto'
})
export class OcultarTextoPipe implements PipeTransform {

  transform(value: string): string {
    return this.ocultar(value);
  }

  ocultar(email: string): string {
    const [username, domain] = email.split('@');
    const initial = username[0];

    const asteriscos = "*".repeat(username.length - 1);
    return `${initial}${asteriscos}@${domain}`;
  }

}

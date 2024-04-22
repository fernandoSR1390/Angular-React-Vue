import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar'
})
export class EsparPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var esPar="no es par";
    if (value % 2 == 0) {
      esPar="es un numero par";
    }
    return "El año es: "+value+" y " + esPar;
  }

}

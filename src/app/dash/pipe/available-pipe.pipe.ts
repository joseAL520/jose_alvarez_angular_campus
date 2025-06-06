import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'availablePipe',
})
export class AvailablePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let data = 'Disponible'
    if(value=='false'){
      data = 'No Disponible'
    }
    return data;
  }

}

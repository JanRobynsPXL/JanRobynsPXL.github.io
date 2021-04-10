import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: number): string {
    let string = '';

    for (let i = 0; i < value; i++){
      string += "\u2605"
    }
    return string;
  }

}

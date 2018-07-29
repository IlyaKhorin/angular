import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: number): string {
    if(!value){
      return ""
    }
    else if(value < 60){
      return `${value} min.`;
    } else {
      return `${~~(value/60)}h ${value%60} min.`;
    }
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { ICourseListItem } from './icourse-list-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: ICourseListItem[]): ICourseListItem[] {
    return value.sort((a, b) => {
      if (!b.date) {
        return 1;
      } else if (!a.date) {
        return -1;
      } else {
        return Date.parse(b.date.toString()) - Date.parse(a.date.toString());
      }
    });
  }

}

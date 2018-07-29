import { Pipe, PipeTransform } from '@angular/core';
import { ICourseListItem } from './icourse-list-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: ICourseListItem[]): ICourseListItem[] {
    return value.sort((a, b) => {
      if (!b.creationDate) {
        return 1;
      }
      else if (!a.creationDate) {
        return -1;
      } else {
        return b.creationDate.getTime() - a.creationDate.getTime()
      }
    });
  }

}

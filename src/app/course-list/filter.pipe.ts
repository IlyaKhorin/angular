import { Pipe, PipeTransform } from '@angular/core';
import { ICourseListItem } from './icourse-list-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICourseListItem[], searchText: String): ICourseListItem[] {
    if (!searchText) {
      return value;
    }
    const toSearch = searchText.toLowerCase();
    return value.filter(i => i.title.toLowerCase().includes(toSearch));
  }

}

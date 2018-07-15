import { Pipe, PipeTransform } from '@angular/core';
import { ICourseListItem } from './icourse-list-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICourseListItem[], searchText: String): any {
    if(!searchText){
      return value;
    }
    let toSearch = searchText.toLowerCase();
    return value.filter(i => i.title.toLowerCase().includes(toSearch));
  }

}

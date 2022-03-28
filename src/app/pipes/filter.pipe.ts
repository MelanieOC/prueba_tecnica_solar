import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../interfaces/type';

@Pipe({
  name: 'filterType'
})
export class FilterPipe implements PipeTransform {

  transform(items: Service[], value: any): Service[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    return items.filter(type => type.type_id == value);
    
  }

}

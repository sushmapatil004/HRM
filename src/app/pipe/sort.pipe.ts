import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortFields: string[]): any[] {
    if (!value || !sortFields || sortFields.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      for (const field of sortFields) {
        if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] > b[field]) {
          return 1;
        }
      }
      return 0;
    });

}

}

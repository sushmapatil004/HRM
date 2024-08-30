import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filteringString:string,prpName:string):any {
    const resultArray=[];
    if(value.length===0 || filteringString===''||prpName===''){
     return value;
    }
      // Convert filteringString to lowercase for case-insensitive comparison
      filteringString = filteringString.toLowerCase();
 
      return value.filter(item => {
        // Check if item[prpName] exists and is a string
        if (item[prpName] && typeof item[prpName] === 'string') {
          return item[prpName].toLowerCase().includes(filteringString);
        }
        return false;
      });
   
     }

}

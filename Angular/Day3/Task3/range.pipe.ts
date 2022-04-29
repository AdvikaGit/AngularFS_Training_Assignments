import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangepipe',
  pure : true
})
export class RangePipe implements PipeTransform {

  transform(inputData:any[], key:number, value:number): any[]
  {
    console.log("hi");
    return inputData.filter(item => item["Salary"] >= key && item['Salary'] <= value);
  }

}

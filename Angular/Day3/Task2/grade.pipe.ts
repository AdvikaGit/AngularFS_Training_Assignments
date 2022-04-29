import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradePipe implements PipeTransform {

  transform(input:number):string
 {
    let output:string ="";

    if(input.toString() =="1") output = "Outstanding";
    if(input.toString() =="2") output = "Excellent";
    if(input.toString() =="3") output = "Good";
    if(input.toString() =="4") output = "Average";


    return output;
 }

}

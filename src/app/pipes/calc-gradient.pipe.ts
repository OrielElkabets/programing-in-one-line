import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcGradient',
  standalone: true
})
export class CalcGradientPipe implements PipeTransform {

  transform(val: number, minVal: number, maxVal: number): string {
    const precentage = 100 / (maxVal - minVal) * (val - minVal);
    return `linear-gradient(to right,rgb(255, 245, 207) ${precentage}%, white ${precentage}%)`
  }

}

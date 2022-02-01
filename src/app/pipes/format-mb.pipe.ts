import { Pipe, PipeTransform } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Pipe({
  name: 'formatMB'
})
export class FormatMBPipe implements PipeTransform {

  transform(size: number): string {
    if (size === 0) return '0 MB';


    return this.round(size, 2) + " MB";
  }

  round(size: number, digits: number) {
    let multiplied: number = size * Math.pow(10, digits);
    let multipliedRounded: number = Math.round(multiplied);
    let rounded: number = multiplied / Math.pow(10, digits);
    return rounded;
  }

}

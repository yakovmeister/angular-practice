import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, args?: number): string | void {
    if (args && value && value.length > args) {
      return `${value.substring(0, args)}...`
    }

    return value;
  }
}

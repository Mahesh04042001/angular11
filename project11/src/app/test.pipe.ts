import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value+5+' '+'mahesh'+' '+'hari';
  }

}

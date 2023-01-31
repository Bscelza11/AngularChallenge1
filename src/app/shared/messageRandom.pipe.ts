import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomMessage',
})
export class RandomMessage implements PipeTransform {
  messages = ['Hi', 'Good Morning', 'You are genious'];

  transform(value: any): any {
    return (
      this.messages[Math.floor(Math.random() * this.messages.length)] +
      ' ' +
      value
    );
  }
}

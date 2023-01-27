import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomMessage',
})
export class RandomMessagePipe implements PipeTransform {
  transform(messages: string[]): any {
    return messages[Math.floor(Math.random() * messages.length)];
  }
}

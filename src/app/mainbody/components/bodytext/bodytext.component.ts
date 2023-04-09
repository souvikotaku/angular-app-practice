import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bodytext',
  templateUrl: './bodytext.component.html',
  styleUrls: ['./bodytext.component.scss'],
})
export class BodytextComponent {
  childMessage: string = 'message from child component';
  outputChildMessage: any = [];
  @Input() fromMainbody: any;
  @Output()
  messageEvent: EventEmitter<any> = new EventEmitter();
  sendMessage() {
    this.outputChildMessage.push('message from child component via output');
    this.messageEvent.emit(this.outputChildMessage);
  }
}

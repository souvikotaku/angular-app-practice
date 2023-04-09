import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { BodytextComponent } from './components/bodytext/bodytext.component';

@Component({
  selector: 'main-body',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss'],
})
export class MainBody implements AfterViewInit {
  title: string = 'Angular App';
  mainbodymessage: string = 'message coming from main body';
  msgfromchild: any;
  receivedmsgfrombtn: any;
  @Input()
  fromParent: any;
  @ViewChild(BodytextComponent) childComp: any;
  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.childComp);
    console.log(this.childComp.fromMainbody);
    this.msgfromchild = this.childComp.childMessage;
  }
  receiveMessage($event: any) {
    console.log('received mesage on btn click', $event);
    this.receivedmsgfrombtn = $event;
  }
  // ngOnInit(): void {}
}

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
  imgUrl: string =
    'https://cdn.theatlantic.com/thumbor/9R5-6pI2aAgktJkscy2zisDfr8s=/1056x0:2664x1608/1080x1080/media/img/mt/2021/06/tra8660_105_trl_comp_v004_7f1c1cb3a/original.jpg';

  redBool: boolean = true;
  redBool2: boolean = false;
  redBool3: boolean = true;
  // ngOnInit(): void {}
}

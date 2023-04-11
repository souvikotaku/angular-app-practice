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

  // this is like states in react
  userName: any = 'write something';
  postTitle: any;
  postDetails: any;
  postImagelink: any;
  postLink: any;

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

  sendMessage2() {
    console.log('clicked new btn');
  }

  onKeyup($event: any) {
    if ($event.keyCode == 13) {
      console.log($event.target.value);
    }
  }
  onKeyup2($event: any) {
    console.log($event.target.value);
  }

  onKeyup3(username: any) {
    console.log(username);
  }
  onKeyup4() {
    console.log(this.userName);
  }
  onKeyup5() {
    console.log(this.postTitle);
  }
  onKeyup6() {
    console.log(this.postDetails);
  }
  onKeyup7() {
    console.log(this.postImagelink);
  }
  onKeyup8() {
    console.log(this.postLink);
  }
  // ngOnInit(): void {}
}

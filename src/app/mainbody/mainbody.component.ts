import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-body',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss'],
})
export class MainBody implements OnInit {
  title: string = 'Angular App';
  mainbodymessage: string = 'message coming from main body';

  @Input()
  fromParent!: string;

  constructor() {}

  ngOnInit(): void {}
}

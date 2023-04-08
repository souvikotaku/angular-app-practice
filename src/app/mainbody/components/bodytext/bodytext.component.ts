import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bodytext',
  templateUrl: './bodytext.component.html',
  styleUrls: ['./bodytext.component.scss'],
})
export class BodytextComponent {
  @Input() fromMainbody!: string;
}

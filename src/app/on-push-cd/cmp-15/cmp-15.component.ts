import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-15',
  template: `
    <a class="link__click" (click)="null">Cmp 15</a>
    <ul>
      <li>
        <app-cmp-16></app-cmp-16>
      </li>
      <li>
        <app-cmp-17></app-cmp-17>
      </li>
      <li>
        <app-cmp-18></app-cmp-18>
      </li>
    </ul>
  `
})
export class Cmp15Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

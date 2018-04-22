import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-3',
  template: `
    <a>Cmp 3</a>
    <ul>
      <li>
        <app-cmp-6></app-cmp-6>
      </li>
      <li>
        <app-cmp-7></app-cmp-7>
      </li>
    </ul>
  `
})
export class Cmp3Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

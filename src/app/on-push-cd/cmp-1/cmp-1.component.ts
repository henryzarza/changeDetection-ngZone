import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-1',
  template: `
    <a>Cmp 1</a>
    <ul>
      <li>
        <app-cmp-2></app-cmp-2>
      </li>
      <li>
        <app-cmp-3></app-cmp-3>
      </li>
    </ul>
  `
})
export class Cmp1Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

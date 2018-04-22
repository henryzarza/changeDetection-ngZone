import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-2',
  template: `
    <a>Cmp 2</a>
    <ul>
      <li>
        <app-cmp-5></app-cmp-5>
      </li>
    </ul>
  `
})
export class Cmp2Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-5',
  template: `
    <a>Cmp 5</a>
    <ul>
      <li>
        <app-cmp-10></app-cmp-10>
      </li>
    </ul>
  `
})
export class Cmp5Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-4',
  template: `
    <a>Cmp 4</a>
    <ul>
      <li>
        <app-cmp-8></app-cmp-8>
      </li>
      <li>
        <app-cmp-9></app-cmp-9>
      </li>
    </ul>
  `
})
export class Cmp4Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

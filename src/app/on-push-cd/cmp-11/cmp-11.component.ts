import { Component, ChangeDetectionStrategy, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-11',
  template: `
    <a>
      <span class="cmp__onpush">OnPush</span>
      Cmp 11
    </a>
    <ul>
      <li>
        <app-cmp-14></app-cmp-14>
      </li>
      <li>
        <app-cmp-15></app-cmp-15>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp11Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

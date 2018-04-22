import { Component, ChangeDetectionStrategy, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-2',
  template: `
    <a>
      <span class="cmp__onpush">OnPush</span>
      Cmp 2
    </a>
    <ul>
      <li>
        <app-cmp-4></app-cmp-4>
      </li>
      <li>
        <app-cmp-5></app-cmp-5>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp2Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

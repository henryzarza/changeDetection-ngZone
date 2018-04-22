import { Component, AfterViewChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cmp-2',
  template: `
    <a>Cmp 2</a>
    <ul>
      <li>
        <app-cmp-5></app-cmp-5>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp2Component implements AfterViewChecked {

  constructor() { }

  ngAfterViewChecked () {
    console.log('cmp2');
  }

}

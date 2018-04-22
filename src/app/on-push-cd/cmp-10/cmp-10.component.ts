import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cmp-10',
  template: `
    <a>
      <span class="cmp__onpush">OnPush</span>
      Cmp 10
    </a>
    <ul>
      <li>
        <app-cmp-12></app-cmp-12>
      </li>
      <li>
        <app-cmp-13></app-cmp-13>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

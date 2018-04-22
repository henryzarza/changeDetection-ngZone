import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cmp-8',
  template: `
    <a>
      <span class="cmp__onpush">OnPush</span>
      Cmp 8
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

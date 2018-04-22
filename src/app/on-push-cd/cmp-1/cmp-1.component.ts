import { Component, OnInit } from '@angular/core';

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
export class Cmp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

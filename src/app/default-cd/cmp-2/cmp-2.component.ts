import { Component, OnInit } from '@angular/core';

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
export class Cmp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-7',
  template: `
    <a>Cmp 7</a>
    <ul>
      <li>
        <app-cmp-11></app-cmp-11>
      </li>
    </ul>
  `
})
export class Cmp7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

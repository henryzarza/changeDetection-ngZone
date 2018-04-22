import { Component, OnInit } from '@angular/core';

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
export class Cmp5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-4',
  template: `
    <a class="link__click" (click)="null">Cmp 4</a>
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
export class Cmp4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

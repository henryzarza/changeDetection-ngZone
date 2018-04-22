import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-6',
  template: `<a>Cmp 6</a>`
})
export class Cmp6Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-9',
  template: `<a>Cmp 9</a>`
})
export class Cmp9Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

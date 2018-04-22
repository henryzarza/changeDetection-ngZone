import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-5',
  template: `<a>Cmp 5</a>`
})
export class Cmp5Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

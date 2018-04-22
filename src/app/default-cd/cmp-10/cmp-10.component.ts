import { Component, NgZone, ElementRef, AfterViewChecked } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-10',
  template: `<a>Cmp 10</a>`
})
export class Cmp10Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

}

import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class';

@Component({
  selector: 'app-cmp-8',
  template: `
    <a>Cmp 8</a>
  `
})
export class Cmp8Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

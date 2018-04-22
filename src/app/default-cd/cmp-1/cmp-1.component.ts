import { Component, AfterViewChecked, ElementRef, NgZone } from '@angular/core';

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
      <li>
        <app-cmp-4></app-cmp-4>
      </li>
    </ul>
  `
})
export class Cmp1Component implements AfterViewChecked {

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewChecked() {
    const a = this.el.nativeElement.querySelector('a');
    a.classList.add('checked');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.classList.remove('checked');
        console.log('cmp1', this.el.nativeElement);
        }, 2000);
    });
  }
}

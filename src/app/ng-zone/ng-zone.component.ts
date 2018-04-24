import { Component, NgZone, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.css']
})
export class NgZoneComponent implements AfterViewInit {

  message: string;
  messageFinish: string;
  time = 0;

  private timeTotal = 40; //quantity of exercises (4) * time of each one

  constructor(private zone: NgZone, private el: ElementRef) { }

  ngAfterViewInit() {
    const refAbdominals = this.el.nativeElement.querySelector('.exercise--squats');
    let iterator = 0;
    setInterval(() => {
      refAbdominals.setAttribute('frame', iterator++);
      if (iterator >= 45) iterator = 0;
    }, 50);
  }

  startWithTimer() {
    this.message = 'with timer';
    this.messageFinish = null;
    this.time = 0;
    this.incrementTimer();
  }

  startWithoutTimer() {
    this.message = 'without timer';
    this.messageFinish = null;
    this.time = 0;

    this.zone.runOutsideAngular(() => {
      this.incrementTimer(true);
    });
  }

  incrementTimer(outsideZone = false) {
    this.time++;
    console.log(`Current time: ${this.time}`);

    if (this.time < this.timeTotal)
      setTimeout(() => this.incrementTimer(outsideZone), 100);
    else {
      this.messageFinish = 'This girl is on fire!'
      outsideZone && this.zone.run(() => console.log('%c Finish outside zone', 'background: #F70042; color: #fff'));
    }
  }
}

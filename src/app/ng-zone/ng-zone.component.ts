import { Component, NgZone, ElementRef } from '@angular/core';
import { initAnimation, stopAnimation } from './animation-exercise';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.css']
})
export class NgZoneComponent {

  message: string;
  messageFinish: string;
  time = 0;
  interval;

  private timeTotal = 80; //quantity of exercises (4) * time of each one
  private changeBetween = 20; //timetotal / quantity of exercises (4)

  constructor(private zone: NgZone, private el: ElementRef) { }

  startAnimations(type: number) {
    console.log('entro', type);
    this.zone.runOutsideAngular(() => {
      switch (type) {
        case 0:
          initAnimation(this.el, '.exercise--squats', 52);
          break;
        case 1:
          initAnimation(this.el, '.exercise--abdominals', 52);
          break;
        default:
          initAnimation(this.el, '.exercise--bike', 52);
          break;
      }
      //initAnimation(this.el, '.exercise--squats', 52);
      //initAnimation(this.el, '.exercise--abdominals', 52);
      //initAnimation(this.el, '.exercise--bike', 52);
      //initAnimation(this.el, '.exercise--dancing', 47);
    });
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

    let i = 0;
    //this.interval = setInterval(() => {
    //  i = Math.ceil(this.timeTotal / 20);
      this.startAnimations(0);
    //}, 20);

    this.zone.runOutsideAngular(() => {
      this.incrementTimer(true);
    });
  }

  incrementTimer(outsideZone = false) {
    this.time++;
    //console.log(`Current time: ${this.time}`);
    /* if (this.time === this.changeBetween)
      this.startAnimations(1); */

    if (this.time < this.timeTotal)
      setTimeout(() => this.incrementTimer(outsideZone), 100);
    else {
      this.messageFinish = 'This girl is on fire!';
      stopAnimation();
      clearInterval(this.interval);
      outsideZone && this.zone.run(() => console.log('%c Finish outside zone', 'background: #F70042; color: #fff'));
    }
  }
}

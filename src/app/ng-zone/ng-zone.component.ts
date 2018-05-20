import { Component, NgZone, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { initAnimation, stopAnimation } from './animation-exercise';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.css']
})
export class NgZoneComponent implements AfterViewChecked {

  message: string;
  messageFinish: string;
  time = 0;

  private timeTotal = 180; // quantity of exercises (4) * time of each one
  private changeBetween = this.timeTotal / 4; // timetotal / quantity of exercises (4)

  constructor(private zone: NgZone, private el: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    //console.log('%c AfterViewChecked', 'background: #0d151f; color: #fff')
  }

  startAnimations(type: number) {
    this.zone.runOutsideAngular(() => {
      switch (type) {
        case 0: {
          this.message = 'Squats';
          initAnimation(this.el, '.exercise--squats', 52);
          //this.cdRef.detectChanges();
          break;
        }
        case 1: {
          this.message = 'Abdominals';
          initAnimation(this.el, '.exercise--abdominals', 52);
          //this.cdRef.detectChanges();
          break;
        }
        case 2: {
          this.message = 'Bike';
          initAnimation(this.el, '.exercise--bike', 52);
          //this.cdRef.detectChanges();
          break;
        }
        default: {
          this.message = 'Dancing';
          initAnimation(this.el, '.exercise--dancing', 47);
          //this.cdRef.detectChanges();
          break;
        }
      }
    });
  }

  startWithTimer() {
    this.messageFinish = null;
    this.time = 0;
    this.startAnimations(0);
    this.incrementTimer();
  }

  startWithoutTimer() {
    this.messageFinish = null;
    this.time = 0;
    this.startAnimations(0);

    this.zone.runOutsideAngular(() => {
      this.incrementTimer(true);
    });
  }

  incrementTimer(outsideZone = false) {
    this.time++;
    console.log(`Current time: ${this.time}`);
    if (this.time === this.changeBetween)
      this.startAnimations(1);
    else
      if(this.time === (this.changeBetween*2))
        this.startAnimations(2);
      else
        if(this.time === (this.changeBetween*3))
          this.startAnimations(3);

    if (this.time < this.timeTotal)
      setTimeout(() => this.incrementTimer(outsideZone), 100);
    else {
      this.messageFinish = 'This girl is on fire!';
      stopAnimation();
      outsideZone && this.zone.run(() => console.log('%c Finish outside zone', 'background: #F70042; color: #fff'));
    }
  }
}

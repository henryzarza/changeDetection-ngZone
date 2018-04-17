import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushCdComponent } from './on-push-cd.component';

describe('OnPushCdComponent', () => {
  let component: OnPushCdComponent;
  let fixture: ComponentFixture<OnPushCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdComponent } from './default-cd.component';

describe('DefaultCdComponent', () => {
  let component: DefaultCdComponent;
  let fixture: ComponentFixture<DefaultCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

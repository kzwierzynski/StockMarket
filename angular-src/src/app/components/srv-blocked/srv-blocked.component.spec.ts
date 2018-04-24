import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvBlockedComponent } from './srv-blocked.component';

describe('SrvBlockedComponent', () => {
  let component: SrvBlockedComponent;
  let fixture: ComponentFixture<SrvBlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrvBlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

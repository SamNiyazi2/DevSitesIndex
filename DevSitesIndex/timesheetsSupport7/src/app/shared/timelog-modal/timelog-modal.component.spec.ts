import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogModalComponent } from './timelog-modal.component';

describe('TimelogModalComponent', () => {
  let component: TimelogModalComponent;
  let fixture: ComponentFixture<TimelogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

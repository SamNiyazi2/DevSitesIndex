import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimelogComponent } from './create-timelog.component';

describe('CreateTimelogComponent', () => {
  let component: CreateTimelogComponent;
  let fixture: ComponentFixture<CreateTimelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

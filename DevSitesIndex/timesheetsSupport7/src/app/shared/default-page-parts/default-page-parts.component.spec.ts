import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPagePartsComponent } from './default-page-parts.component';

describe('DefaultPagePartsComponent', () => {
  let component: DefaultPagePartsComponent;
  let fixture: ComponentFixture<DefaultPagePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPagePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPagePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteMenuComponent } from './main-site-menu.component';

describe('MainSiteMenuComponent', () => {
  let component: MainSiteMenuComponent;
  let fixture: ComponentFixture<MainSiteMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSiteMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSiteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

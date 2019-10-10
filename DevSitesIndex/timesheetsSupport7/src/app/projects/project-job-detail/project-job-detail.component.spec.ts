import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJobDetailComponent } from './project-job-detail.component';

describe('ProjectJobDetailComponent', () => {
  let component: ProjectJobDetailComponent;
  let fixture: ComponentFixture<ProjectJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

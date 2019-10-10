import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJobsListComponent } from './project-jobs-list.component';

describe('ProjectJobsListComponent', () => {
  let component: ProjectJobsListComponent;
  let fixture: ComponentFixture<ProjectJobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

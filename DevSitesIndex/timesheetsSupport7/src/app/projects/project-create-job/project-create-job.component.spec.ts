import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateJobComponent } from './project-create-job.component';

describe('ProjectCreateJobComponent', () => {
  let component: ProjectCreateJobComponent;
  let fixture: ComponentFixture<ProjectCreateJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

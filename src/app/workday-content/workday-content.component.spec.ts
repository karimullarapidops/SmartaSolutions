import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayContentComponent } from './workday-content.component';

describe('WorkdayContentComponent', () => {
  let component: WorkdayContentComponent;
  let fixture: ComponentFixture<WorkdayContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

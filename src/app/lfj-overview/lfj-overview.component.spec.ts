import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjOverviewComponent } from './lfj-overview.component';

describe('LfjOverviewComponent', () => {
  let component: LfjOverviewComponent;
  let fixture: ComponentFixture<LfjOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

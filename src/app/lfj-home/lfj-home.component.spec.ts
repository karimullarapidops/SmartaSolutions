import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjHomeComponent } from './lfj-home.component';

describe('LfjHomeComponent', () => {
  let component: LfjHomeComponent;
  let fixture: ComponentFixture<LfjHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjSignupComponent } from './lfj-signup.component';

describe('LfjSignupComponent', () => {
  let component: LfjSignupComponent;
  let fixture: ComponentFixture<LfjSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

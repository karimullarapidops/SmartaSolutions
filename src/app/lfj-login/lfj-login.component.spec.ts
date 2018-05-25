import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjLoginComponent } from './lfj-login.component';

describe('LfjLoginComponent', () => {
  let component: LfjLoginComponent;
  let fixture: ComponentFixture<LfjLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjProfileComponent } from './lfj-profile.component';

describe('LfjProfileComponent', () => {
  let component: LfjProfileComponent;
  let fixture: ComponentFixture<LfjProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

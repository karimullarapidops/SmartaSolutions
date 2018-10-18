import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjNavComponent } from './lfj-nav.component';

describe('LfjNavComponent', () => {
  let component: LfjNavComponent;
  let fixture: ComponentFixture<LfjNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

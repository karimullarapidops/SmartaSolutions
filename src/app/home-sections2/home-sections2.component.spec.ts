import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSections2Component } from './home-sections2.component';

describe('HomeSections2Component', () => {
  let component: HomeSections2Component;
  let fixture: ComponentFixture<HomeSections2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSections2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSections2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

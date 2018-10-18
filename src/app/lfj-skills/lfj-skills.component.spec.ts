import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfjSkillsComponent } from './lfj-skills.component';

describe('LfjSkillsComponent', () => {
  let component: LfjSkillsComponent;
  let fixture: ComponentFixture<LfjSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfjSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfjSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

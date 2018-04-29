import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapContentComponent } from './sap-content.component';

describe('SapContentComponent', () => {
  let component: SapContentComponent;
  let fixture: ComponentFixture<SapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

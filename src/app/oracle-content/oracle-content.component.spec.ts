import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleContentComponent } from './oracle-content.component';

describe('OracleContentComponent', () => {
  let component: OracleContentComponent;
  let fixture: ComponentFixture<OracleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

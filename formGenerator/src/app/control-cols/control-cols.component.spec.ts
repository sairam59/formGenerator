import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlColsComponent } from './control-cols.component';

describe('ControlColsComponent', () => {
  let component: ControlColsComponent;
  let fixture: ComponentFixture<ControlColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlColsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

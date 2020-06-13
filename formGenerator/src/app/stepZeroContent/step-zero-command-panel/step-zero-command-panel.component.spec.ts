import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepZeroCommandPanelComponent } from './step-zero-command-panel.component';

describe('StepZeroCommandPanelComponent', () => {
  let component: StepZeroCommandPanelComponent;
  let fixture: ComponentFixture<StepZeroCommandPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepZeroCommandPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepZeroCommandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

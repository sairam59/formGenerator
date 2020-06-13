import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepZeroVisualPanelComponent } from './step-zero-visual-panel.component';

describe('StepZeroVisualPanelComponent', () => {
  let component: StepZeroVisualPanelComponent;
  let fixture: ComponentFixture<StepZeroVisualPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepZeroVisualPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepZeroVisualPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFormLayoutComponent } from './final-form-layout.component';

describe('FinalFormLayoutComponent', () => {
  let component: FinalFormLayoutComponent;
  let fixture: ComponentFixture<FinalFormLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalFormLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

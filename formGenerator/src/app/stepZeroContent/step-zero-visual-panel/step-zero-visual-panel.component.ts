import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-zero-visual-panel',
  templateUrl: './step-zero-visual-panel.component.html',
  styleUrls: ['./step-zero-visual-panel.component.scss'],
})
export class StepZeroVisualPanelComponent implements OnInit {
  lines;

  constructor() {}

  ngOnInit(): void {}

  removeThisLine(index) {}

  upThisLine(index) {}

  downThisLine(index) {}
}

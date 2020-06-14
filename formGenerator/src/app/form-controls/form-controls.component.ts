import { Component, OnInit, Input } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class FormControlsComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @Input() labelText: string;
  @Input() controlType: string;
  @Input() required: boolean;
  @Input() controlName: string;
  @Input() hint: string;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  //hint = 'Enter your value in textbox';
  constructor() {}

  ngOnInit(): void {}
}

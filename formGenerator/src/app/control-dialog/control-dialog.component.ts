import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-dialog',
  templateUrl: './control-dialog.component.html',
  styleUrls: ['./control-dialog.component.scss'],
})
export class ControlDialogComponent implements OnInit {
  body: any;

  controlTypes = ['text', 'textarea', 'select', 'radio', 'checkbox'];
  controlForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ControlDialogComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.controlForm = this.fb.group({
      controlType: [null, Validators.required],
      labelText: [null, Validators.required],
      hint: [null, Validators.required],
      isRequired: [false, Validators.required],
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  createControl() {
    this.dialogRef.close(this.controlForm.value);
  }

  onChangeControlType(event: any) {}
}

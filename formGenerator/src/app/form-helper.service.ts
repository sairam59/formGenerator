import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  rows = [
    {
      isSelected: false,
      row: 1,
      cols: [
        {
          col: 1,
          controlType: 'text',
          labelText: '',
          isRequired: false,
          hint: '',
        },
      ],
    },
  ];
  rowIndex = null;
  colIndex = null;

  constructor() {}

  addOneRow() {
    this.rows.push({
      isSelected: false,
      row: 1,
      cols: [
        {
          col: 1,
          controlType: 'text',
          labelText: '',
          isRequired: false,
          hint: '',
        },
      ],
    });
  }

  deleteRow(i) {
    this.rows.splice(i, 1);
  }

  addColumnInRow() {
    if (!!this.rowIndex || this.rowIndex === 0) {
      this.rows.forEach((row, i) => {
        if (this.rowIndex === i) {
          row.isSelected = true;
          row.cols.push({
            col: 1,
            controlType: 'text',
            labelText: '',
            isRequired: false,
            hint: '',
          });
        }
      });
    }
  }

  deleteColumnInRow(index: number) {
    this.rows.forEach((row, i) => {
      if (index === i) {
        row.isSelected = true;
        row.cols.splice(i, 1);
      }
    });
  }

  addControlInColumn(columnCtrl: any) {
    if (!!this.rowIndex || this.rowIndex === 0) {
      this.rows.forEach((row, i) => {
        if (this.rowIndex === i) {
          row.isSelected = true;
          row.cols.forEach((element, j) => {
            if (this.colIndex === j) {
              element = columnCtrl;
            }
          });
        }
      });
    }
  }
}

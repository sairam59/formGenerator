import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormHelperService } from '../form-helper.service';
import { MatDialog } from '@angular/material/dialog';
import { ControlDialogComponent } from '../control-dialog/control-dialog.component';

@Component({
  selector: 'app-control-cols',
  templateUrl: './control-cols.component.html',
  styleUrls: ['./control-cols.component.scss'],
})
export class ControlColsComponent implements OnInit {
  constructor(
    public formService: FormHelperService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  /**
   * form Control -column map
   * persistence form control - link to form group
   *
   */
  ngOnInit(): void {}

  openControlDialog(rowIndex, colIndex) {
    const dialogRef = this.dialog.open(ControlDialogComponent, {
      width: '500px',
      minHeight: '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (!!result) {
        this.formService.rowIndex = rowIndex;
        this.formService.colIndex = colIndex;
        this.formService.addControlInColumn(result);
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  selectedRow(event: any, rowIndex: any) {
    if (event?.checked) {
      this.formService.rowIndex = rowIndex;
    }
  }
}

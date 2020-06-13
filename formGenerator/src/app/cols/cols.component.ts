import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '../form-helper.service';

@Component({
  selector: 'app-cols',
  templateUrl: './cols.component.html',
  styleUrls: ['./cols.component.scss'],
})
export class ColsComponent implements OnInit {
  constructor(public formService: FormHelperService) {}

  ngOnInit() {}

  selectedRow(event: any, rowIndex: any) {
    if (event?.checked) {
      this.formService.rowIndex = rowIndex;
    }
  }
}

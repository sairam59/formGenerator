import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '../form-helper.service';

@Component({
  selector: 'app-final-form-layout',
  templateUrl: './final-form-layout.component.html',
  styleUrls: ['./final-form-layout.component.scss'],
})
export class FinalFormLayoutComponent implements OnInit {
  allRows;
  constructor(public formService: FormHelperService) {}

  ngOnInit(): void {
    this.allRows = this.formService.rows;
    this.allRows.forEach((element) => {
      console.log('elele', element);
    });
  }

  generateForm() {}
  onCancel() {}
}

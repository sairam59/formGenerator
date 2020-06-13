import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '../form-helper.service';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss'],
})
export class RowsComponent implements OnInit {
  constructor(public formService: FormHelperService) {}

  ngOnInit() {}
}

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormHelperService } from '../form-helper.service';

@Component({
  selector: 'app-final-form-layout',
  templateUrl: './final-form-layout.component.html',
  styleUrls: ['./final-form-layout.component.scss'],
})
export class FinalFormLayoutComponent implements OnInit {
  @ViewChild('formGenerated') formGenerated: ElementRef;

  constructor(public formService: FormHelperService) {}

  ngOnInit(): void {}

  generateForm() {
    console.log(this.formGenerated.nativeElement.innerHTML);
  }
  onCancel() {}
}

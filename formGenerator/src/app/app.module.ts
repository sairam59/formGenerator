import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

// Components
import { RowsComponent } from './rows/rows.component';
import { ColsComponent } from './cols/cols.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ControlColsComponent } from './control-cols/control-cols.component';
import { ControlDialogComponent } from './control-dialog/control-dialog.component';
import { FinalFormLayoutComponent } from './final-form-layout/final-form-layout.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RowsComponent,
    ColsComponent,
    FormContainerComponent,
    ControlColsComponent,
    ControlDialogComponent,
    FinalFormLayoutComponent,
    FormControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms modules
    FormsModule,
    ReactiveFormsModule,
    // Material modules
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

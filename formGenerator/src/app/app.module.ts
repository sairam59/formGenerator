import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StepZeroCommandPanelComponent } from './stepZeroContent/step-zero-command-panel/step-zero-command-panel.component';
import { StepZeroVisualPanelComponent } from './stepZeroContent/step-zero-visual-panel/step-zero-visual-panel.component';
import { StepIndicatorComponent } from './stepsIndicator/step-indicator/step-indicator.component';
import { PagerComponent } from './stepsIndicator/pager/pager.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    StepZeroCommandPanelComponent,
    StepZeroVisualPanelComponent,
    StepIndicatorComponent,
    PagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

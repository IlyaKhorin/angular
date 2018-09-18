import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from './duration.pipe';
import { AuthorsInputComponent } from './authors-input/authors-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormsModule],
  declarations: [
    ConfirmationDialogComponent,
    DurationInputComponent,
    DateInputComponent,
    DurationPipe,
    AuthorsInputComponent],
  exports: [
    ConfirmationDialogComponent,
    DurationInputComponent,
    DateInputComponent,
    DurationPipe,
    AuthorsInputComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
})
export class AppCommonModule { }

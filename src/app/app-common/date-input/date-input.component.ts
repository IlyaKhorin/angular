import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DateValidationDirective } from './date-validation.directive';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  public dateValue = new FormControl('', [Validators.required, new DateValidationDirective().validate]);

  onChange = (date: Date) => { };

  onTouched = () => { };

  writeValue(obj: string): void {
    // this.dateValue.setValue(new DatePipe("en-US").transform(obj, 'dd/MM/yyyy'));
    this.onChange(new Date(obj));
  }

  registerOnChange(fn: (date: Date) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }


  constructor() { this.dateValue.valueChanges.subscribe(v => this.writeValue(v)); }

}

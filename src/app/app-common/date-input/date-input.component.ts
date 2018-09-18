import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators, ReactiveFormsModule, FormsModule, NG_VALIDATORS } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  public dateValue = new FormControl();

  onChange = (date: Date) => { };

  onTouched = () => { };

  writeValue(obj: string): void {
    this.dateValue.setValue(new DatePipe("en-US").transform(obj, 'dd/MM/yyyy'));
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

  constructor() {
    this.dateValue.valueChanges.subscribe(v => {
      if (this.dateValue.valid) {
        if (v) {
          this.onChange(new Date(v));
        } else {
          this.onChange(null);
        }
      }
    });
  }

  public validate(c: FormControl) {
    const reg = /^[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}$/;
    if (this.dateValue.value && !reg.test(this.dateValue.value)) {
      return { dateFormat: 'Invalid format. Valid format: dd/MM/yyyy' };
    } else {
      return null;
    }
  }

}

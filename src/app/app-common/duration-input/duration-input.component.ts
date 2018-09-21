import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    }
  ]
})
export class DurationInputComponent implements ControlValueAccessor {

  public durationString = new FormControl();
  public duration: number;

  onChange = (date: number) => { };

  onTouched = () => { };

  writeValue(obj: number): void {
    this.durationString.setValue(obj.toString());
  }

  registerOnChange(fn: (date: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor() {
    this.durationString.valueChanges.subscribe(v => {
      if (this.durationString.valid) {
        if (v) {
          this.duration = Number.parseInt(v);
        } else {
          this.duration = null;
        }
        this.onChange(this.duration);
      }
    });
  }

  public validate(c: FormControl) {
    const reg = /^\d*$/;
    if (this.durationString.value && !reg.test(this.durationString.value)) {
      return { intFormat: 'Invalid format.' };
    } else {
      return null;
    }
  }

}

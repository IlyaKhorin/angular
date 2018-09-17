import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appDateValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateValidationDirective, multi: true }]
})

export class DateValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const reg = /[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}/;
    if (!reg.test(control.value)) {
      return { dateFormat: 'Invalid format. Valid format: dd/MM/yyyy' };
    } else {
      return null;
    }
  }
}

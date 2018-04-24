import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';


/** A hero's name can't match the given regular expression */
export function MaxValidator(numStr: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = parseInt(numStr) < parseInt(control.value);
    return forbidden ? {'maxExceeded': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[maxValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxCtrlDirective, multi: true}]
})
export class MaxCtrlDirective implements Validator {
  @Input('maxValidator') maxExceeded: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.maxExceeded ? MaxValidator(this.maxExceeded)(control) : null;
  }
}

// 10/09/2019 11:36 am - SSN - [20191009-1135] - [001] - M07-12 - Creating custom validators


import { FormControl } from '@angular/forms';

export function customValidator(control: FormControl): { [key: string]: any } {

  return control.value.includes('foo')
    ? { 'customValidator': 'Custom validator: invalid input' }
    : null;
}


export function customValidator_v02(wordsToCheck) {

  return (control: FormControl): { [key: string]: any } => {

    if (!wordsToCheck) return null;

    var invalidWords = wordsToCheck.map(w => control.value.includes(w) ? w : null).filter(w => w != null);

    return invalidWords && invalidWords.length > 0
      ? { 'customValidator': "(util) Invalid input: " + invalidWords.join(', ') }
      : null;
  }
}

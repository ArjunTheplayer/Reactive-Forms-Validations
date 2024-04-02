import { AbstractControl, ValidationErrors } from "@angular/forms";

export class numberonlyvalidators {
 static onlynumber(control: AbstractControl): ValidationErrors|null{
    let val =control.value;
    if (val ===null||val=='') return null;
    if (!val.tostring().match(/^[0-9]+(\.?[0-9]+)?$/))return {'invalidNumber':true};
    return null
  }
}
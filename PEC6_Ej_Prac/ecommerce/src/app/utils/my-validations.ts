import { AbstractControl } from '@angular/forms';

export class MyValidations {

    static nameArticleValidator(control: AbstractControl) {
        const value = control.value;
        if (value === 'Prueba' || value === 'Test' || value === 'Mock' || value === 'Fake') {
            return {
                nameArticleValidator: true
            }
        }

        return null;
    }
}
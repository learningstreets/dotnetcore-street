import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import {FormComponent} from '../app/component/utilComponent/form.Component';

import { FormButtonComponent } from '../app/component/utilComponent/form-button.component';
import { FormInputComponent } from '../app/component/utilComponent/form-input.component';
import { FormSelectComponent } from '../app/component/utilComponent/form-select.component';
import { FormDateComponent } from '../app/component/utilComponent/form-date.component';


import { FormFieldDirective } from './directive/formField.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],

  declarations:[FormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent,
    FormFieldDirective],

  exports:[FormComponent],

  // This is an array of components that Angular will expose to us.
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormDateComponent
  ],
})
export class DynamicFormModule {}
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div class="col-md-12 form-group form-input dp-inline-block" 
      [formGroup]="_formGroup">
      <div class="col-md-7"> 
       <label> {{configFormData.label}}</label>
      </div>

      <div class="col-md-7"> 
      <input class="form-control"
        type="text"
        [attr.placeholder]="configFormData.placeholder"
        [formControlName]="configFormData.controlName" 
        [maxlength]="configFormData.maxlength"/>
        </div>
    </div>
  `,
})
export class FormInputComponent {
  configFormData;
  _formGroup: FormGroup;
}
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="_formGroup">
      <label></label>
      <select [formControlName]="configFormData.name">
        <option value=""></option>
        <option *ngFor="let option of configFormData.options">
          
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent {
    configFormData;
  _formGroup: FormGroup;
}
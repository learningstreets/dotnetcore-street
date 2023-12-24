import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  template: `
   <div 
      class="dynamic-field form-button" style="text-align:center;"
      [formGroup]="_formGroup">
      <button type="submit" class="btn btn-success">
        {{configFormData.label}}
      </button>
    </div>
  `,
})
export class FormButtonComponent   {
    configFormData;
  _formGroup: FormGroup;
}
import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { FormButtonComponent } from '../component/utilComponent/form-button.component';
import { FormInputComponent } from '../component/utilComponent/form-input.component';
import { FormSelectComponent } from '../component/utilComponent/form-select.component';
import { FormDateComponent } from '../component/utilComponent/form-date.component';

import { UtilService } from '../service/utilService';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  date : FormDateComponent
};


@Directive({
  selector: '[formField]',
})
export class FormFieldDirective implements OnInit {

  @Input() configFormData;
  @Input() _formGroup: FormGroup;
  component;



  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private _utilService:UtilService 

  ) {}

  ngOnInit() {
    if(this._utilService.IsValueNotNull(this.configFormData)) {
    const component = components[this.configFormData.type]; // jsut to create the field as we are passing type in string
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.configFormData = this.configFormData;
    this.component.instance._formGroup = this._formGroup;
    }
    else
    {

      alert('Error occured while generating form, please try again.');
    }
  }

}
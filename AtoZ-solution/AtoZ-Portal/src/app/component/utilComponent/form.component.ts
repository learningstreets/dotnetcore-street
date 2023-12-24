import { Component,  OnInit,  Input,  Output,  OnChanges,  EventEmitter, } from '@angular/core';
import { trigger, style,  animate,  transition  } from '@angular/animations';

import  { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UtilService } from '../../service/utilService';
import {IFormConfiguration} from '../../model/formConfiguration';

@Component({
  selector: 'form-content',
  styleUrls:['./form.component.css'],
  // templateUrl: './form.component.html',

  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ],
  template: `
  <div class="dialog-container">
  <div [@dialog] *ngIf="visible" class="dialog" >
  <div class="col-md-12 formHeaderContainer" >
  <div class="col-md-6 formHeaderDiv" > {{FormHeader}} </div>
  <div class="col-md-6 formCancelBtnDiv" >
  <button type="button" class="btn btn-danger" (click)="Cancel()"> Cancel </button>
  </div> 
  </div> 
  <br>
 <form  
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="submitted.emit(form.value)">
      <ng-container
        *ngFor="let field of configFormData;"
        formField
        [configFormData]="field"
        [_formGroup]="form">
      </ng-container>
    </form>  <br>

    <div class="col-md-12 formBottomBtnDiv">
    <button type="button" class="btn btn-danger" (click)="Cancel()"> Cancel </button>
    </div>
  </div>
  </div>
  `
 
})
export class FormComponent implements OnInit {

    constructor(private _formBuilder: FormBuilder,private _utilService: UtilService){
    
    }
 
    @Input()
    configFormData: IFormConfiguration[] = [];
    @Input() visible: boolean;
    @Input() FormHeader: string;
    
    form: FormGroup;
    
  
    @Output()
    submitted: EventEmitter<any> = new EventEmitter();

    @Output()
    visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
      debugger;
      if(this._utilService.IsValueNotNull(this.configFormData)){
      this.form = this.createGroup();
      }
      else
      {
  
        alert('Error occured while generating form, please try again.');
      }
    }

    Cancel() {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }
  
    createGroup() {
      debugger;
      const _formGroup = this._formBuilder.group({});
      this.configFormData.forEach(_control=>{
        _formGroup.addControl(_control.controlName, this._formBuilder.control('')) 
        debugger;

        // Set Value if value is available
        if(this._utilService.IsValueNotNull(_control.controlValue)){
          _formGroup.controls[_control.controlName].setValue(_control.controlValue);
        }

         // Set Validation if Validation has some value
         if(this._utilService.IsValueNotNull(_control.controlValidation)){
          //_formGroup.controls[_control.controlName].setValidators(null);
        }
         
      });
      return _formGroup;
    }

    
  }
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilService } from '../../service/utilService';
@Component({
  selector: 'spin-loader',
  template: `
  <h1> Spinner </h1>
  `,
 
})
export class SpinnerComponent {

    constructor(private _utilService: UtilService){}

    showSpinner: Subject<boolean> = this._utilService.showSpinner;
  
}
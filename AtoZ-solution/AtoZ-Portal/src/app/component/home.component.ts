/**
 * This component is a home component that will have a card view to navigate through different pages
 * 
 */


 import {Component} from '@angular/core';
 import { UtilService } from '../service/utilService';
 import { AuthenticationService } from '../service/AuthenticationService';
 import { Global } from '../shared/global';
 import { Router } from '@angular/router';

 @Component({
    selector:'home-content',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

 })

export class HomeComponent {
   constructor(private _utilService: UtilService,
      private _authenticationService:AuthenticationService,
      private _router:Router) {}

ngOnInit(){

  let _AssociateData =  this._authenticationService.GetAssociateValue();
  if(!this._utilService.IsValueNotNull(_AssociateData))
  this._router.navigateByUrl("/SignIn");
}
 } 
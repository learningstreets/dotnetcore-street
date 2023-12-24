/**
 * This component is a login component that will help a user for login
 * 
 */


import {Component ,Output, EventEmitter} from '@angular/core';
import { UtilService } from '../service/utilService';
import { AuthenticationService } from '../service/AuthenticationService';
import { Global } from '../shared/global';
import { Router } from '@angular/router';


@Component({
   selector:'signIn-content',
   templateUrl: './signIn.component.html',

})

export class SignInComponent {

   constructor(private _utilService: UtilService,
      private _authenticationService:AuthenticationService,
      private _router:Router,
   ) {}

   associateId = "";
   associatePassword = "";
   @Output()
   SignInUserDetails : EventEmitter<any> = new EventEmitter<any>();

ngOnInit(){
   let _AssociateData =  this._authenticationService.GetAssociateValue();
   console.log(_AssociateData);
   if(this._utilService.IsValueNotNull(_AssociateData))
   { 
      this._router.navigateByUrl("/Home");
   }

 }



Authenticate(_uid : string, _upass: string){
if(this._utilService.IsValueNotNull(_uid) && this._utilService.IsValueNotNull(_upass))
{
   this._authenticationService.CheckUserAuthentication(Global.AuthenticateUser_Base_Url, _uid+ ","+_upass)
   .subscribe(response=>{
    let _response:any = response;
    console.log(_response);
    if(_response.Result.length > 0){
       this._authenticationService.SetAssociateValue(_response.Result[0]);
       this._authenticationService.subject.next(_response.Result[0]);
       this._router.navigateByUrl("/Home");
    }
    else
    alert('Invalid User Id and Password.')
   });
}
else
{
alert('User Id and Password are required.')

}

}

} 
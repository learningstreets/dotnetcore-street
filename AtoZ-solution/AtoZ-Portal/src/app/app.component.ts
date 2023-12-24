/**
 * This component will be the master page for rest of the components
 * 
 */

import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from './service/AuthenticationService';
import { UtilService } from './service/utilService';
import { IAssociate } from './model/associate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router:Router,
    private _authenticationService:AuthenticationService,private _utilService: UtilService) 
    {
 
if(this._authenticationService.subject){
      this._authenticationService.subject.subscribe((data)=>{
         
        // Whenever the child emits using the next method, you can receive the data 
        this.userName = data.Associate_Name;
         })
    }
    }
    
  title = 'Project Status Report';
 
  ngOnInit(){
    let _AssociateData =  this._authenticationService.GetAssociateValue();
    if(this._utilService.IsValueNotNull(_AssociateData)){
    this._router.navigateByUrl("/Home");
    }

  }
  userName = 'UNAUTHORIZED';

  GetUserDetails(_associateData : IAssociate){
     
    this.userName = _associateData.Associate_Name;
    this._router.navigateByUrl("/Home");
  }
}

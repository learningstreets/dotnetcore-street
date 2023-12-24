/**
 * This component is a associate component that will have a info about associate
 * 
 */


 import {Component} from '@angular/core';
 import { AssociateService } from '../service/associateService';
 import { Global } from '../shared/global';
 import {IAssociate} from '../model/associate';
 import {IGridRawData} from '../model/shared';
 import {FormConfiguration} from '../model/formConfiguration';

 @Component({
    selector:'associate-content',
    templateUrl: './associate.component.html',
    providers:[AssociateService]

 })

export class AssociateComponent {
constructor(private _associateService:AssociateService){}

AssociateData:IGridRawData = {};
showFormDialog :boolean;
configFormData:any;
FormHeader = 'Associate Details';
_actionFor = '';
ngOnInit(){
    this.GetAllAssociatesDetails(); // initially binding all the data
}
showDataGrid :boolean;

GetAllAssociatesDetails(){

   // call to get all associates
   this._associateService.GetAllAssociateDetails(Global.Associate_Base_Url).subscribe(_data=>{
      var response : any = _data;
      this.AssociateData = {};
      this.AssociateData.Columns =  Global.TableColumns.AssociateColumns;
      this.AssociateData.GridData =  response.Result;
      this.showDataGrid = true; 
   });


}

GetSpecificAssociateDetails(_id: string){
    // call to get specific associat detail
this._associateService.GetAssociateDetails(Global.Associate_Base_Url, _id).subscribe(_data=>{
   var response : any = _data;
   this.AssociateData = {};
   this.AssociateData.Columns =  Global.TableColumns.AssociateColumns;
   this.AssociateData.GridData =  response.Result;
});

}

AddAssociateBtnEvent(){
   this._actionFor = 'ADD';
this.configFormData = FormConfiguration.AssociateFormData;
this.showDataGrid = false;
this.showFormDialog = true;
}

AddAssociateDetails(_associate: IAssociate) {
// call to post all the details
this._associateService.PostAssociateDetails(Global.Associate_Base_Url, _associate).subscribe(_data=>{
      var response : any = _data;
      if(response.Result === 1)
      { 
         alert ('Associate has been succcessfully Added');
      }
      else
      {

         alert ('An error occured while adding associate');
      }
       
   });

}

UpdateAssociateDetails(_associate: IAssociate) {
   // call to post all the details
   this._associateService.PutAssociateDetails(Global.Associate_Base_Url, _associate).subscribe(_data=>{
         var response : any = _data;

         if(response.Result === 1)
      { 
         alert ('Associate has been succcessfully Updated');
      }
      else
      {

         alert ('An error occured while updating associate');
      }
      });
   
   }

   HideFormDialog(_event:any){
      this.showFormDialog = false;
      this.configFormData = [];
      this.GetAllAssociatesDetails();
      this.showDataGrid = true;
      
   }


formSubmitted(_value){

   if(this._actionFor === 'ADD') {
   this.AddAssociateDetails(_value);
   }

   if(this._actionFor === 'UPDATE') {
   this.UpdateAssociateDetails(_value);
   }
}

GetIDForUpdate(_rowData : IAssociate){
this._actionFor = 'UPDATE';

// get initial data to create form
this.configFormData = FormConfiguration.AssociateFormData;

// feed current data 
this.configFormData.forEach(_element => { 
   _element.controlValue = _rowData[_element.controlName];
});

this.showDataGrid = false;
this.showFormDialog = true;

}

} 
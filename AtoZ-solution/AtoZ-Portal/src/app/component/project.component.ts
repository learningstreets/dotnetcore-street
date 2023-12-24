/**
 * This component is a project component that will have a info about project
 * 
 */


 import {Component} from '@angular/core';
 import { ProjectService } from '../service/projectService';
 import { Global } from '../shared/global';
 import {IProject} from '../model/project';
 import {IGridRawData} from '../model/shared';
 import {FormConfiguration} from '../model/formConfiguration';

 @Component({
    selector:'project-content',
    templateUrl: './project.component.html',
    providers:[ProjectService]

 })

export class ProjectComponent {
constructor(private _projectService:ProjectService){}

ProjectData:IGridRawData = {};
showFormDialog :boolean;
configFormData:any;
FormHeader = 'Project Details';
_actionFor = '';
ngOnInit(){
    
    this.GetAllProjectsDetails(); // initially binding all the data
}
showDataGrid :boolean;

GetAllProjectsDetails(){

   // call to get all projects
    
   this._projectService.GetAllProjectDetails(Global.Project_Base_Url).subscribe(_data=>{
      var response : any = _data;
      this.ProjectData = {};
      this.ProjectData.Columns =  Global.TableColumns.ProjectColumns;
      this.ProjectData.GridData =  response.Result;
      this.showDataGrid = true; 
   });


}

GetSpecificProjectDetails(_id: string){
    // call to get specific associat detail
    
this._projectService.GetProjectDetails(Global.Project_Base_Url, _id).subscribe(_data=>{
   var response : any = _data;
   this.ProjectData = {};
   this.ProjectData.Columns =  Global.TableColumns.ProjectColumns;
   this.ProjectData.GridData =  response.Result;
});

}

AddProjectBtnEvent(){
    
   this._actionFor = 'ADD';
this.configFormData = FormConfiguration.ProjectFormData;
this.showDataGrid = false;
this.showFormDialog = true;
}

AddProjectDetails(_project: IProject) {
// call to post all the details
 
this._projectService.PostProjectDetails(Global.Project_Base_Url, _project).subscribe(_data=>{
    
      var response : any = _data;
      if(response.Result === 1)
      { 
         alert ('Project has been succcessfully Added');
      }
      else
      {

         alert ('An error occured while adding project');
      }
       
   });

}

UpdateProjectDetails(_project: IProject) {
   // call to post all the details
    
   this._projectService.PutProjectDetails(Global.Project_Base_Url, _project).subscribe(_data=>{
       
         var response : any = _data;

         if(response.Result === 1)
      { 
         alert ('Project has been succcessfully Updated');
      }
      else
      {

         alert ('An error occured while updating project');
      }

      });
   
   }

   HideFormDialog(_event:any){
      this.showFormDialog = false;
      this.configFormData = [];
      this.GetAllProjectsDetails();
      this.showDataGrid = true;
      
   }


formSubmitted(_value){

   if(this._actionFor === 'ADD') {
   this.AddProjectDetails(_value);
   }

   if(this._actionFor === 'UPDATE') {
   this.UpdateProjectDetails(_value);
   }
}

GetIDForUpdate(_rowData : IProject){
 
this._actionFor = 'UPDATE';
// get initial data to create form
this.configFormData = FormConfiguration.ProjectFormData;

// feed current data 
this.configFormData.forEach(_element => { 
   _element.controlValue = _rowData[_element.controlName];
});

this.showDataGrid = false;
this.showFormDialog = true;


}

} 
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
 

@Injectable({
    providedIn:"root"
})

export class ProjectService{

    _httpHeaders : HttpHeaders;


constructor(private _http:HttpClient){
//this._httpHeaders.append("content-type","application/json");

}

headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

// to get all project details 
GetAllProjectDetails(_api:string){
     
   return this._http.get(_api);
}

// to get specific project details 
GetProjectDetails(_api:string, _id:string){
     
   return this._http.get(_api + _id);
}

// to add specific project details 
PostProjectDetails(_api:string, _projectData:any){
      
   return this._http.post(_api, _projectData, this.headers);
}

// to update specific project details 
PutProjectDetails(_api:string, _projectData:any){
      
   return this._http.put(_api, _projectData, this.headers);
}

} 
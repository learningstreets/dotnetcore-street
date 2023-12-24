import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
 

@Injectable({
    providedIn:"root"
})

export class AssociateService{

    _httpHeaders : HttpHeaders;


constructor(private _http:HttpClient){
//this._httpHeaders.append("content-type","application/json");

}

headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

// to get all associate details 
GetAllAssociateDetails(_api:string){
     
   return this._http.get(_api);
}

// to get specific associate details 
GetAssociateDetails(_api:string, _id:string){
     
   return this._http.get(_api + _id);
}

// to add specific associate details 
PostAssociateDetails(_api:string, _associateData:any){
      
   return this._http.post(_api, _associateData, this.headers);
}

// to update specific associate details 
PutAssociateDetails(_api:string, _associateData:any){
      
   return this._http.put(_api, _associateData, this.headers);
}

} 
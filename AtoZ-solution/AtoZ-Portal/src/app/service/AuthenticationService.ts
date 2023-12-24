import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
 import {Subject} from 'rxjs'

@Injectable({
    providedIn:"root"
})

export class AuthenticationService{

    constructor(private _http:HttpClient){

}

subject:  Subject<any> = new Subject(); 

// method will set the value of user
public SetAssociateValue(_value:any){
    // let value = JSON.parse(JSON.stringify(_value));
    // console.log("Setting Vlaue",value);
 sessionStorage.setItem("_Data", JSON.stringify(_value));

}

// method will get the value of user
public GetAssociateValue(){
    // console.log(sessionStorage.getItem("_Data"));
    // let _data  = sessionStorage.getItem("_Data");

    // console.log(JSON.parse(JSON.stringify(_data)));
    return JSON.parse(sessionStorage.getItem("_Data"));
   
   }


public CheckUserAuthentication(_api:string, _data){
    debugger;
    return this._http.get(_api + _data);

} 

}
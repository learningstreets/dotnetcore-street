import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 

@Injectable({
    providedIn:"root"
})

export class UtilService{

showSpinner = new Subject<boolean>();


constructor(){


}
ShowSpinner(){
    this.showSpinner.next(true);
}

HideSpinner(){
    this.showSpinner.next(false);
}

// method will check if passed value is null or not
public IsValueNotNull(_value:any) : boolean{

let _iNotNull = true;
    switch (_value){
     case null: case undefined:
        _iNotNull = false;
         break;
         
         case typeof(_value) === "string":
         if(_value.trim() === "")
         _iNotNull = false;
         break;

         default:
         if(_value.length <= 0)
         _iNotNull = false;
         break;

    }

    return _iNotNull;
}

}
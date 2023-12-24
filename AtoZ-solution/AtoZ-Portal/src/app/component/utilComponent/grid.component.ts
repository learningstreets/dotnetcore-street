import { Component, EventEmitter, Input, OnInit, Output, OnChanges, ViewChild } from '@angular/core';
import { UtilService } from '../../service/utilService';
import {IGridRawData} from '../../model/shared';
import {Table} from 'primeng/table';

@Component({
  selector: 'grid-content',
templateUrl: './grid.component.html',
styleUrls:['./grid.component.css']
})

export class GridComponent implements OnInit{

    constructor(private _utilService:UtilService ){}

    @Input()
    gridRawData : IGridRawData = {};
    loadGrid=false;
    errorMessage = '';
    columns = [];
    gridData = [];
    IsRender = false;
     @ViewChild('dt',{static : true}) dtTable:Table;


    ngOnInit(){
        debugger;
     if(this._utilService.IsValueNotNull(this.gridRawData)){

        this.IsRender = true;
        this.columns = this.gridRawData.Columns;
        this.gridData = this.gridRawData.GridData;


        this.errorMessage = '';
        this.loadGrid = true;
     }

     else
     {
        this.loadGrid=false;
        this.errorMessage = 'No record found!';

     }

    }

    ngOnChanges(){
        if(this._utilService.IsValueNotNull(this.gridRawData)){
        if(this.IsRender)
        this.ngOnInit();
        }
    }

    @Output()
    SendIDForUpdate : EventEmitter<any> = new EventEmitter<any>();

    SendIDToCallerComponent(_rowData:any){ // it will send the id to parent component
        this.SendIDForUpdate.emit(_rowData);
    }

}
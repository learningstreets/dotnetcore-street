import {TableColumns} from '../shared/tableColumns';

export  class Global{

    // URLS
public static readonly  AssocaitelocalHost = "https://localhost:44353/";
public static readonly  ProjectlocalHost = "https://localhost:44332/";
public static readonly Associate_Base_Url = Global.AssocaitelocalHost + "v1/Associates/";
public static readonly AuthenticateUser_Base_Url = Global.AssocaitelocalHost + "v1/Associates/AuthenticateUser/";

public static readonly Project_Base_Url = Global.ProjectlocalHost + "v1/Projects/";



// Variables

public static readonly  TableColumns  = new TableColumns(); 
}
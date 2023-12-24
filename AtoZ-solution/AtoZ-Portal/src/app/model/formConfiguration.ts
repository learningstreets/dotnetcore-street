import {IAssociate} from './associate';
import {nameOf} from '../shared/nameOf';
import {IProject} from '../model/project';

//import {nameof}  from 'ts-nameof'

export interface IFormConfiguration{

    type?: string;
            label?: string;
            controlName?: string;
             maxlength?: number;
            placeholder?: string;
            controlValue?: any;
            controlValidation?: string; // comma separated value
}

export class FormConfiguration{

   

    public static readonly AssociateFormData = [
        {
            type:'input',
            label:'ID',
            controlName:   nameOf<IAssociate>('Associate_Id'),
             maxlength:15,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Name',
            controlName:  nameOf<IAssociate>('Associate_Name'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Role',
            controlName:  nameOf<IAssociate>('Associate_Role'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Manager',
            controlName: nameOf<IAssociate>('Associate_Manager'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Project',
            controlName: nameOf<IAssociate>('Associate_Project'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Experience',
            controlName: nameOf<IAssociate>('Associate_Experience'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:' Work Location',
            controlName:  nameOf<IAssociate>('Associate_WorkLocation'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Contact',
            controlName:  nameOf<IAssociate>('Associate_Contact'),
            maxlength:30,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'LOB',
            controlName:  nameOf<IAssociate>('Associate_LOB'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Project Manager',
            controlName:  nameOf<IAssociate>('Associate_ProjectManager'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Grade',
            controlName: nameOf<IAssociate>('Associate_Grade'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Skill Set',
            controlName: nameOf<IAssociate>('Associate_SkillSet'),
            maxlength:1000,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Domain',
            controlName:  nameOf<IAssociate>('Associate_Domain'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Work Application',
            controlName:  nameOf<IAssociate>('Associate_Application'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Work Type',
            controlName:  nameOf<IAssociate>('Associate_WorkType'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Account',
            controlName: nameOf<IAssociate>('Associate_Account'),
            maxlength:100,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
        {
            type:'input',
            label:'Is Associate Active',
            controlName:  nameOf<IAssociate>('Associate_IsActive'),
            maxlength:3,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },

        {
            type:'button',
            label:'Submit',
            // controlName:  'a',
            maxlength:3,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
       
        

    ]


    public static readonly ProjectFormData=[
        { type:'input',
        label:'ID',
        controlName:   nameOf<IProject>("Project_Id"),
         maxlength:15,
        placeholder:'',
        controlValue:'',
        controlValidation:''
        },

        {
            type:'input',
        label:'Name', 
        controlName: nameOf<IProject>("Project_Name"),
        maxlength:100,
       placeholder:'',
       controlValue:'',
       controlValidation:''},

        { 
        type:'input',
        label:'Description', 
        controlName: nameOf<IProject>("Project_Description"), 
        maxlength:1000,
       placeholder:'',
       controlValue:'',
       controlValidation:''},

        { type:'input',
        label:'Status', 
         controlName: nameOf<IProject>("Project_Status"),
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        {type:'input',
        label:'LOB', 
         controlName: nameOf<IProject>("Project_LOB"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Account', 
         controlName: nameOf<IProject>("Project_Account"),
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        {type:'input',
        label:'Domain', 
         controlName: nameOf<IProject>("Project_Domain"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Manager', 
         controlName: nameOf<IProject>("Project_Manager"),
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Delivery Manager', 
         controlName: nameOf<IProject>("Project_DeliveryManager"),
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Delivery Head', 
        controlName: nameOf<IProject>("Project_DeliveryHead"), 
        maxlength:100,
       placeholder:'',
       controlValue:'',
       controlValidation:''},

        { type:'input',
        label:'Delivery Partner', 
         controlName: nameOf<IProject>("Project_DeliveryPartner"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Applications', 
         controlName: nameOf<IProject>("Project_Applications"),
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        {type:'input',
        label:'Work Type', 
         controlName: nameOf<IProject>("Project_WorkType"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Total Head Count', 
         controlName: nameOf<IProject>("Project_TotalHeadCount"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'OffShore Head Count', 
         controlName: nameOf<IProject>("Project_OffShoreHeadCount"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'OnShore Head Count', 
         controlName: nameOf<IProject>("Project_OnShoreHeadCount"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'Work Locations', 
         controlName: nameOf<IProject>("Project_WorkLocations"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'StartDate', 
         controlName: nameOf<IProject>("Project_StartDate"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},

        { type:'input',
        label:'EndDate', 
         controlName: nameOf<IProject>("Project_EndDate"), 
         maxlength:100,
        placeholder:'',
        controlValue:'',
        controlValidation:''},
        
        {
            type:'button',
            label:'Submit',
            // controlName:  'a',
            maxlength:3,
            placeholder:'',
            controlValue:'',
            controlValidation:''
        },
]
}
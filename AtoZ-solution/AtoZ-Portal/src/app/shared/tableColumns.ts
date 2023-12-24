import {IAssociate} from '../model/associate';
import {IProject} from '../model/project';
import {nameOf} from '../shared/nameOf';

 enum Order {
     order1, order2, order3, order4, order5, order6, order7, order8, order9, order10, order11, order12, order13, order14
     , order15, order16, order17, order18, order19, order20
 }

export class TableColumns{

AssociateColumns=[
    { order: Order.order1, field: nameOf<IAssociate>("Associate_Id"), header:'ID'},
    { order: Order.order2, field: nameOf<IAssociate>("Associate_Name"), header:'Name'},
    { order: Order.order3, field: nameOf<IAssociate>("Associate_Role"), header:'Role'},
    { order: Order.order4, field: nameOf<IAssociate>("Associate_Account"), header:'Account'},
    { order: Order.order5, field: nameOf<IAssociate>("Associate_Domain"), header:'Domain'},
    { order: Order.order6, field: nameOf<IAssociate>("Associate_LOB"), header:'LOB'},
    { order: Order.order7, field: nameOf<IAssociate>("Associate_Project"), header:'Project'},
    { order: Order.order8, field: nameOf<IAssociate>("Associate_Application"), header:'Application'},
    { order: Order.order9, field: nameOf<IAssociate>("Associate_WorkType"), header:'Work Type'},
    { order: Order.order10, field: nameOf<IAssociate>("Associate_Manager"), header:'Manager'},
    { order: Order.order11, field: nameOf<IAssociate>("Associate_ProjectManager"), header:'Project Manager'},
    { order: Order.order12, field: nameOf<IAssociate>("Associate_Experience"), header:'Experience'},
    { order: Order.order13, field: nameOf<IAssociate>("Associate_WorkLocation"), header:'Work Location'},
    { order: Order.order14, field: nameOf<IAssociate>("Associate_Grade"), header:'Grade'},
    { order: Order.order15, field: nameOf<IAssociate>("Associate_SkillSet"), header:'Skill Set'},
    { order: Order.order16, field: nameOf<IAssociate>("Associate_Contact"), header:'Contact'},
    { order: Order.order17, field: nameOf<IAssociate>("Associate_IsActive"), header:'Is Active?'},
]


ProjectColumns=[
    { order: Order.order1, field: nameOf<IProject>("Project_Id"), header:'ID'},
    { order: Order.order2, field: nameOf<IProject>("Project_Name"), header:'Name'},
    { order: Order.order3, field: nameOf<IProject>("Project_Description"), header:'Description'},
    { order: Order.order4, field: nameOf<IProject>("Project_Status"), header:'Status'},
    { order: Order.order5, field: nameOf<IProject>("Project_LOB"), header:'LOB'},
    { order: Order.order6, field: nameOf<IProject>("Project_Account"), header:'Account'},
    { order: Order.order7, field: nameOf<IProject>("Project_Domain"), header:'Domain'},
    { order: Order.order8, field: nameOf<IProject>("Project_Manager"), header:'Manager'},
    { order: Order.order9, field: nameOf<IProject>("Project_DeliveryManager"), header:'Delivery Manager'},
    { order: Order.order10, field: nameOf<IProject>("Project_DeliveryHead"), header:'Delivery Head'},
    { order: Order.order11, field: nameOf<IProject>("Project_DeliveryPartner"), header:'Delivery Partner'},
    { order: Order.order12, field: nameOf<IProject>("Project_Applications"), header:'Applications'},
    { order: Order.order13, field: nameOf<IProject>("Project_WorkType"), header:'Work Type'},
    { order: Order.order14, field: nameOf<IProject>("Project_TotalHeadCount"), header:'Total Head Count'},
    { order: Order.order15, field: nameOf<IProject>("Project_OffShoreHeadCount"), header:'OffShore Head Count'},
    { order: Order.order16, field: nameOf<IProject>("Project_OnShoreHeadCount"), header:'OnShore Head Count'},
    { order: Order.order17, field: nameOf<IProject>("Project_WorkLocations"), header:'Work Locations'},
    { order: Order.order18, field: nameOf<IProject>("Project_StartDate"), header:'StartDate'},
    { order: Order.order19, field: nameOf<IProject>("Project_EndDate"), header:'EndDate'},
]
}


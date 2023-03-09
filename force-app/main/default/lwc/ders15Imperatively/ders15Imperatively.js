import { LightningElement,track } from 'lwc';
import getOpp from '@salesforce/apex/ControllerClassinVsCode.GetOppRecords';

export default class Ders15Imperatively extends LightningElement {

@track columns=[{
    label:'Opp Name', fieldName:'Name',type:'text'
},

{label:'Opp Close Date', fieldName:'CloseDate',type:'date'
},

{label:'Amount', fieldName:'Amount',type:'currency'
},

{label:'Stage', fieldName:'StageName',type:'picklist'
},
{label:'Probability', fieldName:'Probability',type:'percent'
}]
Opps;
errorList;
handleClick(){
// parametresiz imperatively
    getOpp().then(result => {this.Opps= result})
    .catch(error => {this.erroList = error})
}

}
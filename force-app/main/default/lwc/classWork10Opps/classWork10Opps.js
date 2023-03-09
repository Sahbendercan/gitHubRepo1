import { LightningElement,wire } from 'lwc';
import get10Opp from '@salesforce/apex/ControllerGetRecords.getOpps';

const columns = [
    { label: 'Opportunities', fieldName: 'Name' },
    { label: 'Id', fieldName: 'Id', type: 'text' },
    { label: 'Stage Name', fieldName: 'StageName', type: 'picklist' },
    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
    { label: 'Closed Date', fieldName: 'ClosedDate', type: 'date' },
];

export default class ClassWork10Opps extends LightningElement {

stn= columns;
oppList;
error;

@wire (get10Opp) getOppRecords({data,error}){
    if(data){
        this.oppList=data;
    }
    else if(error){
        this.error=error;
    }
};



}
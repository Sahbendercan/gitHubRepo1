import { LightningElement,api,wire } from 'lwc';
import getCon from '@salesforce/apex/ControllerGetRecords.getExamRecords';
export default class Ders19ContactExamX extends LightningElement {

@api recordId;
examlist;
errorlist;

@wire (getCon,{conId:'$recordId'})examRecords({data,error}){
    if(data){
        this.examlist = data;
    }
    else if(error){
        this.errorlist = error;
    }
}


}
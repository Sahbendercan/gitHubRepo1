import { LightningElement,wire,api } from 'lwc';
import getQsc from '@salesforce/apex/ControllerGetRecords.getQuestionRecords';
export default class Ders19ExamQuestionX extends LightningElement {
    columns = [{
        lable: 'Question Name', fieldName: 'Name'
    },{
        lable:'Qsc Score' , fieldName:'Score__c',type:'number'
    }]
    @api examId;
    qsclist;
    errorlist;
    @wire (getQsc,{exId:'$examId'}) questionDetail({data,error}){
        if(data){
            this.qsclist = data;
        }else if(error){
            this.errorlist=error;
        }
    }
}
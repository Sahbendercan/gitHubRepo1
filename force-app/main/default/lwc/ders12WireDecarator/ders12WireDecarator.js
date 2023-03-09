import { LightningElement,wire } from 'lwc';
import getAcc from '@salesforce/apex/ControllerGetRecords.getAccounts';

export default class Ders12WireDecarator extends LightningElement {

accList;
error;

    @wire (getAcc) getAccRecords({data,error}){
        if(data){
            this.accList=data;
        }
        else if(error){
            this.error=error;
        }
    };

}
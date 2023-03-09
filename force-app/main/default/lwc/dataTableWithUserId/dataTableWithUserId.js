import { LightningElement,wire } from 'lwc';
import getAccUser from '@salesforce/apex/ControllerGetRecords.getAccRecordwithUserId';
import UserId from '@salesforce/user/Id';

const columns = [
    { label: 'Account Fields', fieldName: 'Name' },
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'User Id', fieldName: 'OwnerId', type: 'Id' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
];
export default class DataTableWithUserId extends LightningElement {
    stn= columns;
    usrId= UserId;
    acclist;
    errorlist;

    @wire (getAccUser,{ownId: '$usrId'}) getAccRecords({data, error}){
        if(data){
            this.acclist = data;
        }
        else if(error){
            this.errorlist= error;
        }
    }

}
import { LightningElement,wire,api } from 'lwc';
import getCon from '@salesforce/apex/ControllerGetRecords.getContact';
const columns = [
    { label: 'Contact LastName', fieldName: 'LastName'  },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Birthdate', fieldName: 'Birthdate', type: 'date' },
    { label: 'Title', fieldName: 'Title', type: 'text' },
];
export default class Ders14WireParams extends LightningElement {
stn=columns;
conlist;
errorlist; 
params;    //inputa girdiğim değer
params1;


handleChange(event){
    this.params= event.target.value;
    
}
handleChange1(event){
    this.params1= event.target.value;
    
}
@wire (getCon,{num:'$params', num1:'$params1' } ) getContact({data,error}){
    if(data){
        this.conlist = data;  
    }
    else if(error){
        this.errorlist = error;
    }
}



}
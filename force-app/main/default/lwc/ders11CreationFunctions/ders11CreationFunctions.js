import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Ders11CreationFunctions extends LightningElement {
    handleSuccess(event){

        const tost = new ShowToastEvent({
        
            title: 'Great Job Hakan! :) Contact created',
            message: 'Record Id: '+event.detail.id,
            variant: 'success',
        
        
        });
        this.dispatchEvent(tost);
        }
        handleReset(event) {
            const inputFields = this.template.querySelectorAll(
                '.Hakan'
            );
            if (inputFields) {
                inputFields.forEach(field => {
                    if(field.name === 'Hakan'){
                    field.reset();
                }
                });
            }
         }
        
}
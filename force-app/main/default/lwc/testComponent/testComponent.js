import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService';
import mesaj from'@salesforce/messageChannel/componentCommunication__c'
export default class TestComponent extends LightningElement {

    @wire(MessageContext) mesCont;
    
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'New' },
            { label: 'In Progress', value: 'InProgress' },
            { label: 'Finished', value: 'Finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        const message ={
            postakusu: this.value
        };
        publish(this.mesCont,mesaj,message);
    }
}




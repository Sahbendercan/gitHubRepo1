import { LightningElement,wire } from 'lwc';
import {subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
import mesaj from'@salesforce/messageChannel/componentCommunication__c'
export default class TestComponent2 extends LightningElement {

value1;
subscription = null;

@wire(MessageContext) mesCont;
   connectedCallback(){
    this.subscription = subscribe(
        this.mesCont,mesaj,
        (message) => {
            this.handleSonuc(message);
        }
    )
   }
   handleSonuc(message){
    this.value1 = message.postakusu

   }
   disconnectedCallback(){
    unsubscribe(this.subscription);
    this.subscription = null;
   }


}


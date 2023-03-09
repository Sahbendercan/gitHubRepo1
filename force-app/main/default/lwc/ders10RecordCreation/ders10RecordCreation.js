import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Ders10RecordCreation extends LightningElement {


//fields=['Name','Phone','Email'];

handleSuccess(event){

const tost = new ShowToastEvent({

    title: 'Great Job Hakan! \n Contact created',
    message: 'Record Id: '+event.detail.id,
    variant: 'success',


});
this.dispatchEvent(tost);
}

}
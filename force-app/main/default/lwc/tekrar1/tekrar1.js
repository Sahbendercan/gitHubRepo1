import { LightningElement,wire } from 'lwc';


export default class Tekrar1 extends LightningElement {

    value;
handleClick(){
    this.template.querySelector('lightning-card').title = 'No not OK!';
    this.value = this.template.querySelector('.akan').value;
}
}
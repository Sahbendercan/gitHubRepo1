import { LightningElement } from 'lwc';

export default class ClassWork1 extends LightningElement {


    handleClick(){
       // this.template.querySelector('lightning-card').style.Color='green';
        this.template.querySelector('p').style.color='aqua';
    }


}
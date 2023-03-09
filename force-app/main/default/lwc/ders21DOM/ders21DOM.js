import { LightningElement } from 'lwc';

export default class Ders21DOM extends LightningElement {


    deger;
    deger2;
    handleClick(){
        this.deger = this.template.querySelector('p').innerHTML;

    }
}
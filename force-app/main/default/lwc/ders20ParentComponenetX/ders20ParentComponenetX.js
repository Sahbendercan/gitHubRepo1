import { LightningElement } from 'lwc';

export default class Ders20ParentComponenetX extends LightningElement {

    deger;
    handleparent(event){
        this.deger = event.detail;
    }
}
import { LightningElement } from 'lwc';

export default class Ders20ParentComponent extends LightningElement {

    deger;
    handleparent(event){
        
this.deger = event.detail; //.target.value; yerine detail yazılır
       
    }
}
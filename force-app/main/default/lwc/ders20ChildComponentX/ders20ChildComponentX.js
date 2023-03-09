import { LightningElement } from 'lwc';

export default class Ders20ChildComponentX extends LightningElement {

    childvar;
    handleChange(event){
        this.childvar = event.target.value;

        const childEvent = new CustomEvent('beta',{
            detail: this.childvar
        });
        this.dispatchEvent(childEvent);
    }
}
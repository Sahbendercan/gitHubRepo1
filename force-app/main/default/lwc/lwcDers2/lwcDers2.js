import { LightningElement } from 'lwc';

export default class LwcDers2 extends LightningElement {

name;
surname;
    method1(event){
        this.name = event.target.value;


}

method2(event){
this.surname=event.target.value;
}
}
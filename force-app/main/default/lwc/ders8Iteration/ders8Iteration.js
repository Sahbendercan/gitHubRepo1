import { LightningElement } from 'lwc';

export default class Ders8Iteration extends LightningElement {

country= ['USA','Türkiye', 'Poland','Germany','England','Italy'];
animal=['Cat','Dog','Eagle','Tiger','Horse'];
friend=['Hatice','Elif','Serap','Seda','Fatma','Bahar'];

goster=false;
goster1=false;
goster2=false;

handleClick(){
    this.goster= !this.goster;
}

handleClick1(){
    this.goster1= !this.goster1;
}
handleClick2(){
    this.goster2= !this.goster2;
}
}
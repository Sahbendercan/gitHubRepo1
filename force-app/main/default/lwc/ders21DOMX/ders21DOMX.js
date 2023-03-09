import { LightningElement } from 'lwc';
import secondtemplate from './secondtemplate.html'
export default class Ders21DOMX extends LightningElement {

    constructor(){
        super();
        console.log(this.template.querySelector('.inp').value);
    }
    
    
    
    isim;
    handleClick(){
        this.template.querySelector('.div1').textContent += 'Merhaba Dünya';
        this.isim = this.template.querySelector('.inp').value;
        this.template.querySelector('p').textContent = this.isim;
    }
    
}
import { LightningElement } from 'lwc';

export default class Lwcders3 extends LightningElement {

İsim;
Soyisim;
Yas;
Memleket;

isim1;
soyisim1;
yas1;
memleket1;
handlemethod1(event){
    this.İsim=event.target.value;
}
handlemethod2(event){
    this.Soyisim=event.target.value;
}
handlemethod3(event){
    this.Yas=event.target.valeu;
}
handlemethod4(event){
    this.Memleket=event.target.valeu;
}
handleClick(){
this.isim1=this.İsim;
this.soyisim1=this.Soyisim;
this.yas1=this.Yas;
this.memleket1=this.Memleket;
}



}
import { LightningElement } from 'lwc';

export default class Lwcders5 extends LightningElement {

number1;
number2;
sonuc;
oncekisonuclar=[];
goster = false;
handlemethod1(event){
    if(event.target.name === 'num1'){
        this.number1 = event.target.value;
    }
    if(event.target.name === 'num2'){
        this.number2 = event.target.value;
    }
}
toplama(){
    this.sonuc =parseInt(this.number1) + parseInt(this.number2);
    this.oncekisonuclar.push(this.sonuc);
}
cikarma(){
    this.sonuc =parseInt(this.number1) - parseInt(this.number2);
    this.oncekisonuclar.push(this.sonuc);
}
carpma(){
    this.sonuc =parseInt(this.number1) * parseInt(this.number2);
    this.oncekisonuclar.push(this.sonuc);
}
bolme(){
    this.sonuc =parseInt(this.number1) / parseInt(this.number2);
    this.oncekisonuclar.push(this.sonuc);}
    silme(){
        this.sonuc= '';
        this.oncekisonuclar=[];
    }
    handleclick(){
        if(this.goster==false){
            this.goster =true;
        }
        else if(this.goster== true){
            this.goster = false;
        }

    }

}
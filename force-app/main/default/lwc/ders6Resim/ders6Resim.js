import { LightningElement } from 'lwc';
import Hagi from '@salesforce/resourceUrl/Hagi';



export default class Ders6Resim extends LightningElement {

Hagi = Hagi;
goster= false;
handleclick(){
this.goster = !this.goster;
}

}
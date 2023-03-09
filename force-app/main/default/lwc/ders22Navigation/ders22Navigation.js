import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Ders22Navigation extends NavigationMixin (LightningElement) {

    HandleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
            state:{
                filterName: 'PlatinumandGoldSLACustomers'
            }
        })
    }
}
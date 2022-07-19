import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class WirePractice extends LightningElement {
    filterWord;
    @wire(getAccounts,{filter:'$filterWord'}) accountList;
    handleSearch(event){
        this.filterWord=event.target.value;
    }
}
import fetchAccounts from '@salesforce/apex/AccountCollector.fetchAccounts';
import { LightningElement, wire } from 'lwc';

export default class RecapWire extends LightningElement {
@wire(fetchAccounts) accountList;
columns=[
    {label:'Name' ,fieldName:'Name'},
    {label:'Id' ,fieldName:'Id'},
    {label:'Industry' ,fieldName:'Industry'},
    {label:'AnnualRevenue' ,fieldName:'AnnualRevenue'}
];

}
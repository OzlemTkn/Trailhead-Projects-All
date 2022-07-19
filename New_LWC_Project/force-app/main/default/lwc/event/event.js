import { LightningElement } from 'lwc';

export default class Event extends LightningElement {
    handleClick(event){
    
        window.alert('standard event listened in HTML and handeled in JS');
    }
}
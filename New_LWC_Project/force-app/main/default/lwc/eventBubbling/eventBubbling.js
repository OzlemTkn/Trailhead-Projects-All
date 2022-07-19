import { LightningElement } from 'lwc';

export default class EventBubbling extends LightningElement {
    handleFormClick(event){
        window.alert('Click on form!');
    }
    handleDivClick(event){
        window.alert('Click on div!');
    }
    handleParClick(event){
        window.alert('Click on paragraph!');
    }
}
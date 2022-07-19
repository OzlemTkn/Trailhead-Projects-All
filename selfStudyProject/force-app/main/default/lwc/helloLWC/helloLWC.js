import { LightningElement } from 'lwc';

export default class HelloLWC extends LightningElement {
    name='LWC!'
    info='type your name'
    fullName =''
    handlechange(event){
        this.fullName=event.target.value;
    }
}
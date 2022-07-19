import { LightningElement } from 'lwc';

export default class HelloDataBinding extends LightningElement {
    name='world of LWC!'
    greeting ='type your name.'
    fullname =''
    handleChange(event){
this.fullname=event.target.value;    }
}
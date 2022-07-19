import { LightningElement } from 'lwc';
export default class ConditionalREndering extends LightningElement {
    flag=false;
   
   
   
    handeFlag(event){
        this.flag=event.target.checked;
        console.log(event.target.checked);
    }
}
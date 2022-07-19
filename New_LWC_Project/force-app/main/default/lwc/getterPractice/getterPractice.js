import { LightningElement } from 'lwc';
export default class GetterPractice extends LightningElement {
    numb1=10;
    numb2=20;
    get result(){
        console.log('getter...')
        return this.numb1+this.numb2;
    }
    nameList=['Osman','Sarah','Mike','Ali']
    message='Please enter a value between 0 and ' + (this.nameList.length-1)
    get indexedName(){
        if(this.index<this.nameList.length){
            return this.nameList[this.index];
        } else{
            window.alert(this.message)
        }
    }
    index=0;
    handleInput(event){
        this.index=event.target.value;
    }
}
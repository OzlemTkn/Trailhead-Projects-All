import { LightningElement } from 'lwc';
export default class HelloDataBinding extends LightningElement {
    name='LWC!'
    info='type your name...'
    fullName=''
    firstName='';
    lastName='';
    

    get uppercasedFullName(){
        const full=this.firstName+' '+this.lastName;
        return full.toUpperCase();
    }
    handleChange(event){
        this.fullName=event.target.value;
    }
    handleInput1(event){
        this.firstName=event.target.value;
    }
    handleInput2(event){
        this.lastName=event.target.value;
    }
}
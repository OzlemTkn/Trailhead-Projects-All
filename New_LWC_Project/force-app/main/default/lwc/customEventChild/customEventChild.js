import { LightningElement } from 'lwc';
export default class CustomEventChild extends LightningElement {
    childData='This Data locates in child Component'
    customer={
        name:'Ahmet',
        ssn:123456,
        email:'ahmet@gmail.com'
    }
    handleClick(event){
        console.log('Button clicked on Child Comp');
        // const custEvent=new CustomEvent('fire',{detail:this.childData});
        // console.log('Custom event Created');
        // this.dispatchEvent(custEvent);
        if(this.customer.ssn>1000){
            const custEvent2=new CustomEvent('complete',{detail:this.customer});
            this.dispatchEvent(custEvent2);
        }else{
            window.alert('please enter a valid SSN')
        }
        
    }
    handleInfoInput(event){
        this.childData=event.target.value;
        const custEvent=new CustomEvent('fire',{detail:this.childData});
        this.dispatchEvent(custEvent);
    }
    handleName(event){
        this.customer.name=event.target.value;
    }
    handleSSN(event){
            this.customer.ssn=event.target.value;       
    }
    handleEmail(event){
        this.customer.email=event.target.value;
    }
}
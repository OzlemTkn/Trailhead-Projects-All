import { LightningElement } from 'lwc';
export default class CustomEventParent extends LightningElement {
    information;
    customerDetail={};
    handleCustomEvent(event){
        // window.alert('Custom event fired in Child, listend and handled on Parent')
        // window.alert('data coming from child:--> '+event.detail)
        this.information=event.detail;
    }
    handleCustomer(event){
        // window.alert('Customer name: --> '+ event.detail.name)
        this.customerDetail=event.detail;
    }
}
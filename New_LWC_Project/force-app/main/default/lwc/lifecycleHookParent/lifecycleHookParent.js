import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
export default class LifecycleHookParent extends LightningElement {
    constructor(){
        super()
        console.log('Parent constructor is called!')
        // console.log('QuerySelector: '+  this.template.querySelector('.abc'))
    }
    @track contacts;
    connectedCallback(){
        console.log('Parent connectedcallback is called!')
        getContacts().then(result=>{
            this.contacts=result
        })
    }
    renderedCallback(){
        console.log('Parent renderedCallback is called!')
    }
    data;
    handleChange(event){
        console.log('input handled')
        this.data=event.target.value;
    }
    isChildVisible=false;
    variant='success';
    label='Add Child Comp';
    handleClick(event){
        this.isChildVisible=!this.isChildVisible;
        if(this.isChildVisible===true){
            this.variant='destructive';
            this.label='Remove Child Comp';
        }else{
            this.variant='success';
            this.label='Add Child Comp';
        }
    }
    errorCallback(error,stack){
        console.log(error.message)
        alert(error.message)
        console.log(stack)
    }
    @track showStartBtn = true;
    @track timeVal = '0:0:0:0';
    timeIntervalInstance;
    totalMilliseconds = 0;

    start(event) {
        this.showStartBtn = false;
        var parentThis = this;

        // Run timer code in every 100 milliseconds
        this.timeIntervalInstance = setInterval(function() {

            // Time calculations for hours, minutes, seconds and milliseconds
            var hours = Math.floor((parentThis.totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((parentThis.totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((parentThis.totalMilliseconds % (1000 * 60)) / 1000);
            var milliseconds = Math.floor((parentThis.totalMilliseconds % (1000)));
            
            // Output the result in the timeVal variable
            parentThis.timeVal = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;   
            
            parentThis.totalMilliseconds += 100;
        }, 100);
    }

    stop(event) {
        this.showStartBtn = true;
        clearInterval(this.timeIntervalInstance);
    }

    reset(event) {
        this.showStartBtn = true;
        this.timeVal = '0:0:0:0';
        this.totalMilliseconds = 0;
        clearInterval(this.timeIntervalInstance);
    }
}
import { LightningElement } from 'lwc';
export default class LifecycleHookChild extends LightningElement {
    constructor(){
        super()
        console.log('Child constructor is called!')
    }
    connectedCallback(){
        console.log('Child connectedcallback is called!')
        window.addEventListener('click', this.handleWindowClick)
        throw new Error('Child component insertion failed!!!');
    }
    renderedCallback(){
        console.log('Child renderedCallback is called!')
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback is called!')
        window.removeEventListener('click', this.handleWindowClick)
    }
    handleWindowClick(event){
        console.log('window is clicked!')
    }
}
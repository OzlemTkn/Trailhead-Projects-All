import { LightningElement, track } from 'lwc';

export default class RecapDecoratorParent extends LightningElement {
    musteriIsmi;
    musteriYasi;
    sayac=3;
    @track
    musteriler=[{name:'Ali', age:33, id:0},{name:'gökhan',age:37, id:1},{name:'mustafa',age:39,id:2}]
    /* musteri={
        name:'ozlem',
        age:36
    } */
    handleName(event){
        this.musteriIsmi=event.target.value;
    }
    handleAge(event){
        this.musteriYasi=event.target.value;
    }

    addCustomer(event){
        const tempCust={
            name:this.musteriIsmi,
            age:this.musteriYasi,
            id:this.sayac
        }
        this.sayac++;
        this.musteriler=tempCust;
    }
}
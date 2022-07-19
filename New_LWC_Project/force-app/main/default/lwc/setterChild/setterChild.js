import { api,LightningElement } from 'lwc';
export default class SetterChild extends LightningElement {
 
    customerInfo;
 
 @api
 get customer(){
     return this.customerInfo
 }
 set customer(data){
     let tempCust={...data, name:data.name+'TTTest', age:data.age*4}
    // let tempCust=Object.assign({},data)
    // tempCust.name=data.name+'TESTTTT'
    // tempCust.age=data.age*3
    this.customerInfo=tempCust;
 }
//append 'TEST' to name
//doule the age
/*
String name1='Arzu';  
String name2=name1;
name2='Sarah'
System.debug(name1)--->Sarah
System.debug(name2)--->Sarah
*/
 /* birthYear;
   @api
    get age(){
        console.log('getter')
        return this.birthYear;
    }
    set age(data){
        console.log(data)
        console.log('setter') 
        this.birthYear=2022-data;   }*/
        //console.log(data.name +" 1 "+data.age)   //Ahmet 22
        // let tempCust=Object.assign({},data);
        //let tempCust={...data, name:data.name+'Test', age:data.age*2}
        // console.log(tempCust.name+" (tempcust1) " +tempCust.age)  //Ahmet 22
        // tempCust.name= tempCust.name+'TEST';
        // tempCust.age=tempCust.age*2;
        // console.log(tempCust.name+" (tempcust1) " +tempCust.age) //Ahmet TEST 44
        // console.log(data.name +" 2 "+data.age)  //Ahmet 22
}
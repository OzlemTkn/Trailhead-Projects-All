import { LightningElement, track } from 'lwc';
export default class Decorators extends LightningElement {
    familyName='';
    familyMemberName;
    familyMemberAge;
    count=0;
    @track
    familyMember={
        name: 'Osman',
        age: 55
    }
    
    @track
    familyMemberList=[
    ]
    handleFamilyName(event){
        this.familyName=event.target.value;
        console.log('html rerenders')
    }
    handleFamilyMemberName(event){
        this.familyMemberName=event.target.value;
         //this.familyMember.name=event.target.value;
        // this.familyMember={
        //     name: event.target.value,
        //     age: 55
        // }
        console.log('handling family member name...')
        console.log(this.familyMember.name)
    }
    handleFamilyMemberAge(event){
        this.familyMemberAge=event.target.value;
        //this.familyMember.age=event.target.value;
    }
    handleClick(event){
        const member={
            name:this.familyMemberName,
            age:this.familyMemberAge,
            id:this.count}
        this.count++;
        this.familyMemberList.push(member)
    }
    
    handleClear(event){
        this.familyMemberList=[]
    }
}
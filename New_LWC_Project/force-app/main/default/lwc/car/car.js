import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    carBrand='';
    carEngineModel='';
    carEngineVolume='';
    carEngineFeature='';

    handleBrand(event){
        this.carBrand=event.target.value;
    }
    handleModel(event){
        this.carEngineModel=event.target.value;
    }
    handleVolume(event){
        this.carEngineVolume=event.target.value;
    }
    handleEngineFeature(event){
        this.carEngineFeature=event.target.value;
    }
}
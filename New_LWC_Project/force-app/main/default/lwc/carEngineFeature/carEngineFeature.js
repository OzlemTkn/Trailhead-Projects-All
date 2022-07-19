import {  api, LightningElement } from 'lwc';
export default class CarEngineFeature extends LightningElement {
    @api
    volume='';
   @api
    fuelType='';
    @api
    engineFeature='';
    //@api is used to make js property public.
}
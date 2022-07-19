import { api, LightningElement } from 'lwc';
export default class CarEngine extends LightningElement {
    @api
    engineModel='VTEC';
    @api
    engineVolume='';
    @api
    engineFeatures='';
}
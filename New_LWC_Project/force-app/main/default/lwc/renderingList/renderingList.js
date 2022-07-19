import { LightningElement } from 'lwc';

export default class RenderingList extends LightningElement {
    customers = [
        {
            id:1,
            Name:'Ozlem Tekin',
            Role:'CEO'
        },
        {
            id:2,
            Name:'Emre Tosun',
            Role:'Sales Manager'
        },
        {
            id:3,
            Name:'Lütfü Tos',
            Role:'Marketing Manager'
        }

    ];
}
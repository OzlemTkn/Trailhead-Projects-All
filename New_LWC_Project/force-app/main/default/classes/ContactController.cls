public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getContacts(){
     return [SELECT Name FROM Contact];
    }
}

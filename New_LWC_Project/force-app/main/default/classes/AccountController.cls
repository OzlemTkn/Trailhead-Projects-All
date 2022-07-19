public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String filter){
        String name='%'+filter+'%'; 
        return [SELECT Id, Name FROM Account WHERE Name LIKE:name];
        // String query='SELECT Id, Name FROM Account WHERE Name LIKE \'%'+filter+'%\'';
        // return Database.query(query);
    }
}


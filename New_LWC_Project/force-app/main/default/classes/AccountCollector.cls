public with sharing class AccountCollector {
 @AuraEnabled(cacheable=True)
public static List<Account> fetchAccounts(String filtre){
    string name='%'+filtre+'%';
    return [SELECT Id, Name, BillingCountry,Phone From Account];
}
   
}

export class Customer{
    
    CustomerLogin(){
        cy.get('.borderM > :nth-child(1) > .btn')
        .click()
    }
    SelectUser(){
        cy.get('select[name="userSelect"]').select('Harry Potter')
    }
    Login(){
        cy.get('form.ng-valid > .btn')
        .click()
    }
    Deposit(){
        cy.get('[ng-class="btnClass2"]')
        .click()
    }
    Amount(amount){
        cy.get('.form-control')
        .type(amount)
    }
    DepositAmount(){
        cy.get('form.ng-dirty > .btn')        
        .click()
    }
    Withdraw(){
        cy.get('[ng-class="btnClass3"]')
        .click()
    }
    Wamount(wamount){
        cy.get('.form-control')
        .type(wamount)
    }
    WithdrawAmount(){
        cy.get('form.ng-dirty > .btn')        
        .click() 
    }
    ViewTransactions(){
        cy.get('[ng-class="btnClass1"]')
        .click()
    } 
    ResetTransactions(){
        cy.get('[style="float:right;margin-top:-30px;"]')
        .click()
    }   
    Logout(){
        cy.get('.logout')
        .click()
    }  
}
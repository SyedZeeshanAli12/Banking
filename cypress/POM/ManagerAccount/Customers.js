export class Customers{

    OpenCustomers(){
        cy.get('[ng-class="btnClass3"]')
        .click()
    }

    search(name){
        cy.get('.form-control')
        .type(name)
    }

    FirstNameFilter(){
        cy.get(':nth-child(1) > a')
        .click()
    }
    
    LastNameFilter(){
        cy.get(':nth-child(2) > a')
        .click()
    }

    PostCodeFilter(){
        cy.get(':nth-child(3) > a')
        .click()
    }

    DeleteCustomer(){
        cy.get(':nth-child(3) > :nth-child(5) > button')        
        .click()
    }
}
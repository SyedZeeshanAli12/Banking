export class BankManager{

    ManagerLogin(){
        cy.get(':nth-child(3) > .btn')
        .click()
    }
    AddCustomer(){
        cy.get('[ng-class="btnClass1"]')
        .click()
    }
}
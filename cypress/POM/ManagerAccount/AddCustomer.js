export class AddCustomer{

    FirstName(firstname){
        cy.get(':nth-child(1) > .form-control')
        .type(firstname)
    }
    LastName(lastname){
        cy.get(':nth-child(2) > .form-control')
        .type(lastname)
    }
    PostCode(postcode){
        cy.get(':nth-child(3) > .form-control')
        .type(postcode)
    }
    AddCustomer(){
        cy.get('form.ng-dirty > .btn')        
        .click()
    }
}
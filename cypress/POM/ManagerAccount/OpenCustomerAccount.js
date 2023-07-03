export class OpenAccount{

    OpenAccountButton(){
        cy.get('[ng-class="btnClass2"]')
        .click()
    }
    SelectUser(){
        cy.get('select[name="userSelect"]').select('harry styles')
    }
    SelectCurrency(){
        cy.get('select[name="currency"]').select('Rupee')
    }
    Process(){
        cy.get('form.ng-dirty > button')
        .click()
    }
}
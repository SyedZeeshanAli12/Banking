import { Customer } from "../POM/CustomerAccount";


const customer = new Customer()


describe('Welcome Page', () => {

    it('Customer Login Test', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.wait(2000)
      customer.CustomerLogin()
      cy.wait(2000)
      customer.SelectUser()
      cy.wait(2000)
      customer.Login()
    })
})


describe('Deposit and Withdrawal amount', () => {

    it('Deposit and Withdrawal', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.wait(2000)
      customer.CustomerLogin()
      cy.wait(2000)
      customer.SelectUser()
      cy.wait(2000)
      customer.Login()
      cy.wait(2000)
      customer.Deposit()
      cy.wait(2000)
      customer.Amount('2000')
      cy.wait(2000)
      customer.DepositAmount()
      cy.wait(2000)
      customer.Withdraw()
      cy.wait(2000)
      customer.Wamount('1000')
      cy.wait(2000)
      customer.WithdrawAmount()
      cy.wait(4000)
    })
})



describe('Transactions', () => {

    it('View and Reset Transactions', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.wait(2000)
      customer.CustomerLogin()
      cy.wait(2000)
      customer.SelectUser()
      cy.wait(2000)
      customer.Login()
      cy.wait(2000)
      customer.ViewTransactions()
      cy.wait(2000)
      customer.ResetTransactions()
      cy.wait(2000)
      customer.Logout()
    })
})




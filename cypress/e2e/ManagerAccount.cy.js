import { BankManager } from '../POM/ManagerAccount/BankManagerLogin'
import { AddCustomer } from '../POM/ManagerAccount/AddCustomer'
import { Customers } from '../POM/ManagerAccount/Customers'
import { OpenAccount } from '../POM/ManagerAccount/OpenCustomerAccount'

const bankmanager = new BankManager()
const addcustomer = new AddCustomer()
const customer = new Customers()
const openaccount = new OpenAccount()

describe('Welcome Page', () => {

  it('Bank Manager Login Test', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.wait(2000)
    bankmanager.ManagerLogin()
    cy.wait(2000)
    bankmanager.AddCustomer()
    cy.wait(2000);
    cy.go('back');
    cy.wait(2000);
  })

  it('Add Customer Form Test',()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    bankmanager.ManagerLogin()
    cy.wait(2000)
    bankmanager.AddCustomer()
    cy.wait(2000)
    addcustomer.FirstName('harry')
    cy.wait(2000)
    addcustomer.LastName('styles')
    cy.wait(2000)
    addcustomer.PostCode('54000')
    cy.wait(2000)
    addcustomer.AddCustomer()
  })

  it('open bank account for customer',()=>{

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    bankmanager.ManagerLogin()
    cy.wait(2000)
    openaccount.OpenAccountButton()
    cy.wait(2000)
    openaccount.SelectUser()
    cy.wait(2000)
    openaccount.SelectCurrency()
    cy.wait(2000)
    openaccount.Process()
  })

  it('search, view and manage customers',()=>{

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    bankmanager.ManagerLogin()
    cy.wait(2000)
    customer.OpenCustomers()
    cy.wait(2000)
    customer.search('h')
    cy.wait(2000)
    customer.FirstNameFilter()
    cy.wait(2000)
    customer.LastNameFilter()
    cy.wait(2000)
    customer.PostCodeFilter()
    cy.wait(2000)
    customer.DeleteCustomer()
  })
})
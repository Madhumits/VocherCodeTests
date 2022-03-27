/// <reference types="cypress" />
import { selectors } from '../support/selectors'

context('Search through category', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'VoucherCodes - Exclusive Discount Codes & Vouchers')
    cy.log('On Voucher code home page')
  })

  describe('Valid Search', () => {
    it('search restaurant voucher for one people on any day', () => {
      cy.get(selectors.categories.categoriesLnk).click()
      cy.contains(selectors.categories.restaurant).click()
      cy.url().should('include', 'restaurant-vouchers')
      cy.log('search restaurant voucher page')
      cy.get(selectors.restaurant.locationText).type('London', { delay: 1000 }).type('{downarrow}{enter}')
      cy.get(selectors.restaurant.dayDrpdwn).select(1)
      cy.get(selectors.restaurant.peopleDropdwn).select('2')
      cy.get(selectors.restaurant.searchBtn).should('be.enabled').click()

      //To do: assertion is uncleared from the requirement
    })
  })

  describe('Invalid search', () => {
    it('search restaurant voucher for any people and any day', () => {
      cy.get(selectors.categories.categoriesLnk).click()
      cy.contains(selectors.categories.restaurant).click()
      cy.url().should('include', 'restaurant-voucherr')
    })
  })
})

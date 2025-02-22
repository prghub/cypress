/// <reference types="cypress" />

it('Sauce Demo tests', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('.inventory_list')
    .should('contain', 'Sauce Labs Backpack')
    .and('have.class', 'inventory_list')
    .and('be.visible');
})
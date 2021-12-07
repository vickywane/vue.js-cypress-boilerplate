// import { mount } from '@cypress/vue'
// import HelloWorld from '../../src/App.vue'
// <reference types="cypress" />

context('HelloWorld', () => {
  before(() => {
    cy.visit('/')
  })

  it('Should display home page', () => {
    cy.get('h1').should('exist')
  })
})

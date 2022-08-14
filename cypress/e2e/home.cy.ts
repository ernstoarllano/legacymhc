/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the communities component with children components', () => {
    cy.get('[data-cy="communities"]')
      .children()
      .each((community) => {
        cy.wrap(community).within(() => {
          cy.get('[data-cy="image"]').find('img').should('be.visible')
          cy.get('[data-cy="age"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="title"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="city"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="state"]').invoke('text').should('have.length.gt', 0)
        })
      })
  })

  it('should render the homes component with children components', () => {
    cy.get('[data-cy="homes"]')
      .children()
      .each((home) => {
        cy.wrap(home).within(() => {
          cy.get('[data-cy="image"]').find('img').should('be.visible')
          cy.get('[data-cy="age"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="title"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="price"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="bd"]').invoke('text').should('have.length.gt', 0)
          cy.get('[data-cy="ba"]').invoke('text').should('have.length.gt', 0)
        })
      })
  })

  it('should render the blog component with fetched data', () => {
    cy.get('[data-cy="blog"]').children()
  })
})

export {}

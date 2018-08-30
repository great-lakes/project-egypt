describe('Home Page', function() {
  beforeEach(() => {
    cy.visit('/')
    console.log('TEST!')
  })

  it('contains the text "Welcome"', () => {
    cy.contains('Welcome')
  })

  it('can navigate to Hub Management Page in navbar', () => {
    cy.get('nav a.hub-manage').click()
    cy.url().should('include', 'hub')
  })

  it('can navigate to Hub Management Page on page body', () => {
    cy.get('.Home a.hub-manage').click()
    cy.url().should('include', 'hub')
  })

  it('can navigate to Generator Management page on navbar', () => {
    cy.get('nav a.generator-manage').click()
    cy.url().should('include', 'generator')
  })
})

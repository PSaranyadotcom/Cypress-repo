
describe('My First Test', () => {
  it('Test1-positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
 
  })
  it('Test2-negative', function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM1')
  })
})

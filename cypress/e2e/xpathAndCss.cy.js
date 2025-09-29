describe('Xpath and CSS', () => {
  it('Xpath and CSS', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").contains("Abc").click()
    cy.xpath("//ul[@class='.uhdjvhjkm']").xpath("./a").should("have.length","5")
  })
})

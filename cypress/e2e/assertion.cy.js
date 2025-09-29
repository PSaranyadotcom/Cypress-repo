describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //should and
    cy.url().should("include","orangehrmlive")
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("contain","orangehrm")

      cy.url().should("include","orangehrmlive")
      .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .should("contain","orangehrm")

       cy.url().should("include","orangehrmlive")
      .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .and("contain","orangehrm")

  })
  it('ngetive assertion', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //should and
    cy.url().should("notinclude","orangehrmMive")
    cy.url().should("not.eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("not.contain","orangehrm")
    cy.get("//img[alt='orangehrm-logo']").should("be.visible")
    .and("exist")
    cy.xpath("//a").should("have.length","5")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='username']").should("have.value","Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-userdropdown-name").should("have.text","Paul Collings")
    .and("contain","Paul")
    .and("not.contain","Paul123")
    .and("not.have.text","Paul123")
  })

    it('ngetive assertion', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //should and
   cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    let expName="Paul Collings";
    cy.get(".oxd-userdropdown-name").then((x)=>{
      let actName=x.text()
      //BDD
      expect(actName).to.eq(expName)
      expect(actName).to.include("Paul")  
      expect(actName).to.not.include("Paul123")
      expect(actName).to.not.eq("Paul123")
      //TDD
      assert.equal(actName,expName)
      assert.include(actName,"Paul")
      assert.notInclude(actName,"Paul123")
      assert.notEqual(actName,"Paul123")
    
  })
})
})
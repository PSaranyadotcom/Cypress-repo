describe("Hooks",()=>{
    before("before",()=>{
        cy.log("launch an app!")
    })
    after("after",()=>{
        cy.log("close the app")
    })
    beforeEach("beforeeach",()=>{
        cy.log("login")
    })
    afterEach("aftereach",()=>{
        cy.log("logout")
    })
    it.skip("search",()=>{
cy.log("search")
 })
   it.only("Advanced search",()=>{
    cy.log("advance search")

 })
    it("listing products",()=>{
cy.log("listing product")
 })
    it("Add to cart",()=>{
cy.log("Add to cart")
 })
})
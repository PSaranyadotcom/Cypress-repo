describe("child tabs",()=>{
    it("child window",()=>{
        //Note:cypress will automatically handles alrest
      cy.visit("https://the-internet.herokuapp.com/windows")

    //   cy.get(".example a").invoke("removeAttr","target").click();
    //   cy.get(".example h3").should("have.text","New Window");
    //   cy.wait(5000)
    //   cy.go("back");
       cy.get(".example a").then((el)=>{
        let url=el.prop("href")
        cy.visit(url)
       })
         cy.get(".example h3").should("have.text","New Window");
      cy.wait(5000)
          cy.go("back");
    })
})
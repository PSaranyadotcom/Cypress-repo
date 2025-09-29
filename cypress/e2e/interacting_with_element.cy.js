describe("check ui elements", ()=>{
//     it("checking radio button", ()=>{
//         cy.visit("https://demoapps.qspiders.com/ui/radio?sublist=0")
// //    cy.contains('a', 'Radio Button').click()
//         cy.get("#attended").should("be.visible")
//      cy.get("#attended").check({ force: true }).should("be.checked");


//     })
//      it("checking check boxes", ()=>{
//         cy.visit("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//         // cy.xpath("//a[text()='Check Box']").click()
//          cy.get("#domain_a").should("be.visible")
//         cy.get("#domain_a").check().should("be.checked")
//           cy.get("#domain_a").uncheck().should("not.be.checked")
// cy.get("type=['checkbox']").check().should("be.checked")

// cy.get("type=['checkbox']").uncheck().should("not.be.checked")
// cy.get("type=['checkbox']").first().check().should("be.checked")
// cy.get("type=['checkbox']").last().check().should("be.checked")




//     })
//     it("Handling dropdowns-static values", function(){

// cy.visit("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// cy.get("//select[@id='country_code']").select("+91").should("have.value","+91")

//     })

//        it("Handling dropdowns-without select tag", function(){

// cy.visit("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
// cy.get("//select[@id='country_code']").click().type("Italy").type("{enter}")
// cy.get("//select[@id='country_code']").should("have.text","Italy")  //expecting text

//     })

      it("autosuggestion-handling dynamic values", function(){
cy.visit("https://www.google.com/?zx=1758128943646&no_sw_cr=1")
cy.get("#APjFqb").type("delhi")
cy.wait(3000)
// cy.get(".wM6W7d").screenshot("have.lenght",11)
// cy.get(".wM6W7d").contains("Delhi Sultanate").click()

cy.get(".wM6W7d").each(($el, index, $list)=>{
    if($el.text()=="delhi"){
cy.wrap($el).click()

    }

})
cy.wait(5000)
cy.get(".gLFyf").should("have.value","delhi")


      })
}) 
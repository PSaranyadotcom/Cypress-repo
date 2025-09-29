
// require('@4tw/cypress-drag-drop');

describe("mouse over actions", ()=>{
      it('mouse over', () => {
 cy.visit("https://www.amazon.com/")
 cy.get("#nav-link-accountList a").trigger('mouseover')
cy.xpath("//div[text()='Your Lists']").should("not.be.visible")
cy.get("#nav-link-accountList a").trigger('mouseover')
cy.xpath("//div[text()='Your Lists']").should("be.visible")

        
      })

           it('right click', () => {
 cy.visit("https://www.amazon.com/")
    cy.get("#nav-orders").trigger('contextmenu')
      cy.get("#nav-orders").rightclick()
   cy.wait(3000)
 
        
      })

                it('double click', () => {
 cy.visit("https://www.amazon.com/")
//    cy.get("#nav-orders").trigger('contextmenu')
      cy.xpath("//div[@class='s-no-outline']/h2[contains(text(),'Results')]").trigger('dblclick')
       cy.xpath("//div[@class='s-no-outline']/h2[contains(text(),'Results')]").dblclick()
   cy.wait(3000)
 
        
      })
                     it('drag and drop', () => {
 cy.visit("https://demo.automationtesting.in/Static.html")
 
//    cy.get("#nav-orders").trigger('contextmenu')
   cy.get("#mongo").drag("#droparea",{force:true})
   cy.wait(3000)
 
        
      })
                         it.only('scrolling actions', () => {
 cy.visit("https://www.npmjs.com/package/@4tw/cypress-drag-drop?activeTab=versions")
 
//    cy.get("#nav-orders").trigger('contextmenu')
   cy.get("div._33c89934.w-100 a").scrollIntoView({duration:3000})
    cy.get("div._33c89934.w-100 a").should("be.visible")
//scrolling up
   cy.wait(3000)
cy.xpath("//input[@name='q']").scrollIntoView({duration:3000})
   cy.wait(3000)
 
        
      })
})
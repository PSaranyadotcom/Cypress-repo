describe("Navigation", ()=>{
      it('Navigation', () => {
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
               cy.get("input[name='username']").type("Admin")
cy.get("input[name='password']").type("admin123")
cy.get("button[type='submit']").click()
           cy.title().should("eq","OrangeHRM")
           cy.get(".oxd-main-menu-item.active").click()
           cy.get(".oxd-text.oxd-text--span").should("exist")
           cy.go("back")
           // or
           cy.go(-1)
           cy.go("forward")
           //or
           cy.go(1)
           cy.reload()
      }
      )
    })
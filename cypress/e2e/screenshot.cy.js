describe("screenshots",()=>{
    it("screenshots",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.screenshot("loginpage")
        cy.get("img[alt='company-branding']").screenshot("logo")
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should("have.text","yes")
        //automatically capture screenshot and video on failures







    })
})
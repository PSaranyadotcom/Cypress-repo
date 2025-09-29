// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" /> //for cypress
/// <reference types="cypress-xpath" /> // for xpath

//custom commnand for login

Cypress.Commands.add("login",(username,password,logouttext)=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type(username)
    cy.get("input[name='password']").type(password)
    cy.get("button[type='submit']").click()
    if(logouttext=="Dashboard"){
    cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text",logouttext)
    cy.get(".oxd-userdropdown-tab .oxd-icon").click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click({force:true});
    // cy.get(".oxd-dropdown-menu li:nth-child(4) a").click({force:true});
}
else{
    cy.get(".oxd-alert-content.oxd-alert-content--error p").should("have.text",logouttext)
}

})
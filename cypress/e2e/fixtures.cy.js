
describe("fixtures", ()=>{
//       it('fixtures', () => {
//            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// cy.fixture("orangehrm2").then((data)=>{
//     cy.get("input[name='username']").type(data.name)
// cy.get("input[name='password']").type(data.password)
// cy.get("button[type='submit']").click()
// cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text",data.text)
// })

//       })
    

    //anpther mehtod

//     let UD;
//     before(()=>{
// cy.fixture("orangehrm2").then((data)=>{
//     UD=data;
//     })
//       it('fixtures', () => {
//            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     cy.get("input[name='username']").type(UD.name)
// cy.get("input[name='password']").type(UD.password)
// cy.get("button[type='submit']").click()
// cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text",UD.text)
// })

//       })
         it.only('passing multiple values', () => {
cy.fixture("orangehrm").then((data)=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   data.forEach((UD)=>{
           cy.get("input[name='username']").type(UD.name)
cy.get("input[name='password']").type(UD.password)
cy.get("button[type='submit']").click()
if(UD.name=="Admin"&& UD.password=="admin123"){
    cy.get(".oxd-topbar-header-breadcrumb h6").should("have.text",UD.text)

cy.get(".oxd-userdropdown-tab .oxd-icon").click()
cy.get(':nth-child(4) > .oxd-userdropdown-link').click({force:true});
// cy.get(".oxd-dropdown-menu li:nth-child(4) a").click({force:true});

}
else{
    cy.get(".oxd-alert-content.oxd-alert-content--error p").should("have.text",UD.text)
}

    })
 
})

      })







    })
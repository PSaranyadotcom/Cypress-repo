const Login = require('../Pom/login')
describe("Pom login",()=>{
    it("Pom login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login()
        cy.fixture("orangehrm2").then((data)=>{
           ln.setUsername(data.name)
           ln.setPassword(data.password)
           ln. clickLogin()
        })
    

    })
})
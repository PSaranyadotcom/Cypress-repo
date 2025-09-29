class Login{
    username="input[name='username']"
    password="input[name='password']"
    login="button[type='submit']"
    setUsername(un){
            cy.get(this.username).type(un)
    }
   setPassword(pwd){
cy.get(this.password).type(pwd)
   }
   clickLogin(){
cy.get(this.login).click()
   } 
}
module.exports = Login;
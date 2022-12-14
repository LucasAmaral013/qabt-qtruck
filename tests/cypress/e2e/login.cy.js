import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {

  beforeEach(()=> {
    cy.fixture('login-users').then(function(users){
      this.users = users
    })
  })

  it('deve logar com sucesso', function () {

    const user = this.users.success

    cy.apiCreateUser(user)

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('não de logar com senha invalida', function () {

    const user = this.users.inv_pass


    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('não de logar com instagram inexistente', function () {
    const user = this.users.not_found

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatorio', function () {
    const user = this.users.required_insta

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatorio', function (){
    const user = this.users.required_pass

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatorios', ()=>{

    loginPage.go()
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
  
})


import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {

    const user = {
      name:'Lucas',
      instagram: 'lucas_amaral__',
      password:'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('não de logar com senha invalida', ()=> {

    const user = {
      name:'Lucas',
      instagram: 'lucas_amaral__',
      password:'pwd1234'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('não de logar com instagram inexistente', ()=> {
    const user = {
      name:'Lucas',
      instagram: 'amaral_lucas__',
      password:'pwd1234'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatorio', ()=>{
    const user = {
      instagram: '',
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatorio', ()=>{
    const user = {
      instagram: 'lucas_amaral__',
    }

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


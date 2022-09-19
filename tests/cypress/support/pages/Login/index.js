import modal from '../components/Modal'

class LoginPage {

    //propriedade que acessa a classe modal
    constructor(){
        this.modal = modal
    }

    go(){
        cy.visit('/')
    }

    form(user){
        if(user.instagram)cy.get('input[name=instagram]').type(user.instagram)
        if(user.password)cy.get('input[name=password]').type(user.password)
    }

    submit(){
        cy.contains('button', 'Entrar').click()
    }

}

//exportando essa classe ja intanciada/criada
export default new LoginPage()
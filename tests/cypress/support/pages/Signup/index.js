import modal from '../components/Modal'

class SignupPage {

    //propriedade que acessa a classe modal
    constructor(){
        this.modal = modal
    }

    go(){
        cy.visit('/signup')
    }

    form(user){
        if(user.name)cy.get('input[name=name]').type(user.name)
        if(user.instagram)cy.get('input[name=instagram]').type(user.instagram)
        if(user.password)cy.get('input[name=password]').type(user.password)
    }

    submit(){
        cy.contains('button', 'Cadastrar').click()
    }

}

//exportando essa classe ja intanciada/criada
export default new SignupPage()
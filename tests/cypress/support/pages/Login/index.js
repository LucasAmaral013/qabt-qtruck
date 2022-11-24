import modal from '../components/Modal'

class LoginPage {

    //propriedade que acessa a classe modal
    constructor() {
        this.modal = modal
    }

    go(lat, long) {
        //this = serve para pegar uma função dentro da prorpia classe
        cy.visit('/', this.mockLocation(lat, long))
    }

    form(user) {
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit() {
        cy.contains('button', 'Entrar').click()
    }

    mockLocation(latitude, longitude) {
        return{
            onBeforeLoad(win){
                //o comando stub serve para fazer uma simulação no cypress
                /*navigator.geolocation = ter acesso ao navegado durante a execução
                estou fazendo uma chamanda fake
                cb= call back
                */
                cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb, err) => {
                    if (latitude && longitude) {
                        return cb({ coords: { latitude, longitude } })
                    }
                    throw err({ code: 1 })
                });
            }
        }
        
    }

}

//exportando essa classe ja intanciada/criada
export default new LoginPage()
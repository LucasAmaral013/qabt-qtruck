import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('deve cadastrar um novo usuario', ()=> {
        
        const user = {
            name: 'Harry Potter',
            instagram: 'Potter',
            password: 'voldemort'
        }

        //Se eu tiver o usuario harry no banco ele vai excluir do banco e rodar normal
        // cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => {
        //     cy.log(res);
        // })

        cy.resetUser(user.instagram)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('não deve cadastrar com instagram duplicado', () => {
        const user = {
            name:'Hermione Granger',
            instagram:'Hermione',
            password:'pwd123'
        }

        cy.resetUser(user.instagram)

        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')

    })
})



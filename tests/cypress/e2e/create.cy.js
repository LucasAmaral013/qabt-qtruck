
import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Bruna',
            instagram: '@bruna',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude:'-23.53703864868797',
            longitude:'-46.45543903112412',
            name: 'Tenda do Amaral',
            details: 'O melhor lugar para reunir os amigos e pode relaxar.',
            opening_hours: 'das 19 às 23:30h',
            open_on_weekends: false
        }

        //estou garantido que a massa existe 
        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
        


        cy.wait(3000)



    })

})
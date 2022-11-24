
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
        
    })

    it('não deve cadastrar foodtruck com o nome duplicado', () => {

        const user = {
            name: 'Maria',
            instagram: '@maria',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude:'-46.45378679037095',
            longitude:'-23.535927151180786',
            name: 'Churros do Robson',
            details: 'O melhor lugar para reunir os amigos e pode relaxar.',
            opening_hours: 'das 20h às 00h',
            open_on_weekends: true
        }

        //estou garantido que a massa existe 
        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        cy.uiLogin(user)
        

        

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
        
    })

    it.only('todos os campos são obrigatórios', () => {

        const user = {
            name: 'Maria',
            instagram: '@maria',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude:'-46.45378679037095',
            longitude:'-23.535927151180786',
            
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeoLocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()
        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
        
    })

})



//continuar o modulo modulo 14
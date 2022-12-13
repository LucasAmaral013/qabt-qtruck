
import mapPage from '../support/pages/Map'

describe('Avaliações', () =>{

    it('deve enviar uma nova avaliação', () =>{

        const user = {
            name: 'Madruga Ramon',
            instagram: '@madruguinha',
            password:'pwd123'
        }

        const foodtruck = {
            latitude:'-23.536291093876567',
            longitude:'-46.46314233541489',
            name: 'Cross Burger',
            details: 'Os melhores lanches da região',
            opening_hours: 'das 20h às 00h',
            open_on_weekends: false
        }

        const review = {
            comment: 'O lanche estava muito bom, poderia ser maior',
            stars: '4'
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodTruck(foodtruck.name)

        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()

        
    })

})


class FoodTruckPage {

    addReview(review){
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }

    /*
    relembrando de como criar um xpath: //span[text()="@madruguinha"]/../../../..//p
    no cypress nao precisa utilizar todo esse xpath, basta ir combinando os localizadores para chegar no elemento pai ou filho 
    */

    reviewShouldBe(user, review){

        cy.contains('.review-box', user.instagram).as('reviewBox')

        cy.get('@reviewBox')
            .find('.comment p')
            .should('have.text', review.comment)
        cy.get('@reviewBox')
            .find('.stars svg')
            //length= para contar a quantidade de elementos com o locator
            .should('have.length', review.stars)
    }
}

export default new FoodTruckPage()
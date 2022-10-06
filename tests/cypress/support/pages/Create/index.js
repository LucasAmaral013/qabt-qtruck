import modal from '../components/Modal'

class CreatePage{

    constructor(){
        this.modal = modal
    }
    
    form(foodtruck){
        cy.setGeoLocation(foodtruck.latitude, foodtruck.longitude)

        cy.get('input[name=name]').type(foodtruck.name)
        cy.get('textarea[name=details]').type(foodtruck.details)
        cy.get('input[name=opening-hours]').type(foodtruck.opening_hours)

        //? = esta perguntado para o objeto se ele existe, se sim retorna "sim"  senao "nao"
        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não')
            .click()

        /* if(foodtruck.open_on_weekends === 'Sim')
            cy.contains('button', 'Sim').click()
        if(foodtruck.open_on_weekends === 'Não')
            cy.contains('button', 'Não').click() */


    }

    submit(){
        cy.contains('button', 'Cadastrar').click()
    }

}

export default new CreatePage()
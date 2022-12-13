
class MapPage{

    loggedUser(name){

        const firstName = name.split(' ')[0]

        cy.get('.logged-user')
        .should('be.visible')
        .should('have.text', `Olá, ${firstName}`)
    }

    createLink(){
        //Peguei o href porque estou garantido que eu peguei o elemento certo e ja estou validando a rota desse link
        cy.get('a[href="/foodtrucks/create"]')
        .should('be.visible')
        .click()
    }

    goToFoodTruck(foodtruckName){

        /* cy.get('.leaflet-marker-pane img').as('mapList')

        cy.get('@mapList').each((element, index, list)=> {
            cy.get('@mapList')
                //eq= Função pare pegar uma determinada posicap de vario elementos
                .eq(index)
                .click({force: true})
            cy.wait(1000)

            cy.get('.leaflet-popup-content').as('ftName')
            
            cy.get('@ftName')
            //Função para obter uma caracteristica do elemento, entao passei o que eu quero do elemento no caso foi o texto
            .invoke('text')
            //depois de pegar o texto eu consigo passar por meio de um callback. ou seja o txt vai ter o texto de cada foodtruck
            .then((txt)=>{
                cy.log(txt)
                if(txt === foodtruck.name){
                    // se o valor de txt for igual ao nome do foodtruck que eu passei, ele pega o foddtruck e pega o elemento filho dele 
                    cy.get('@ftName').find('a').click()
                    return false
                }
            })
            
        }) */
        cy.get(`img[alt="${foodtruckName}"]`)
        .should('be.visible')
        .click({force: true})
        
        cy.get('.leaflet-popup-content a').click() 
    }
        

}

export default new MapPage()
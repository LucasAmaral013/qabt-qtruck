import loginPage from '../pages/Login'
import mapPage from '../pages/Map'

Cypress.Commands.add('uiLogin', (user) => {



    loginPage.go('-23.536291093876567', '-46.46314233541489')
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeoLocation',(lat, long) => {
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', long)
})
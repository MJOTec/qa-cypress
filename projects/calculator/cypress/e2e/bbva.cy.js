describe("Suite de pruebas BBVA", () => {
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com")
    })
    it('Validar pagina de inicio', () => {
        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")
    })
    /*
    it('Prueba de transferencia de fondos', () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        cy.wait(2000)
    })
    */
    it('Validar apartado de feedback', () => {
        cy.get('#feedback > div > strong').click()
        cy.get('#name').type('Ramon')
        cy.get('#email').type('ramon@gmail.tec')
        cy.get('#subject').type('No pagan')
        cy.get('#comment').type('Quiero mi dinero')
        cy.get('.btn-signin').click()
        cy.get('.offset3').contains('Thank you for your comments')
    })
})
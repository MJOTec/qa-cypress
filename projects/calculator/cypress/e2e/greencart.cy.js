describe('Probar la funcionalidad de la pagina greencart', () => {
        beforeEach(() => {
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        })
    
        it('probar que al escribir ca se muestren 4 elementos', () => {
            cy.get('.search-keyword').type('ca')
            cy.get('.product:visible').should('have.length', 4)
            cy.get(':nth-child(2) > .product-action > button').click()
            cy.get('.cart-icon > img').click()
        })
        it('Comprar 4 productos', () => {
            cy.get('.search-keyword').type('Potato')
            cy.get('.increment').click(2)
            cy.get('.product-action > button').click()
            cy.get('.cart-icon > img').click()
        })
    })
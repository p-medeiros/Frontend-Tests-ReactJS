describe("Testa a paagina de Dashboard ", () => {
    it("Deve carregar uma lista com x pokemons ", () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:5000/pokemon', {
            fixture: 'pokemons.json'
        });

        cy.contains('Rotom')
    })

    it("Deve abrir a pagina detail de um pokemon ", () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:5000/pokemon', {
            fixture: 'pokemons.json'
        });

        cy.intercept('GET', 'http://localhost:5000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        });

        cy.contains('Pikachu').click();
        cy.contains("Voltar")
    })

    it("Deve voltar ", () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:5000/pokemon', {
            fixture: 'pokemons.json'
        });

        cy.intercept('GET', 'http://localhost:5000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        });

        cy.contains('Pikachu').click();
        cy.contains("Voltar").click();
        cy.contains('Dashboard')
    })
})
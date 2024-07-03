describe('Testa a pagina de detalhaes do pokemon', () => {
    it('Deve renderizar um pokemon na tela ',()=> {
        cy.visit("/pokemon-detail/1")

        cy.intercept('GET', 'http://localhost:5000/pokemon/1', {
            fixture: 'pokemon-detail.json'
          });

          cy.contains('Pikachu')
          cy.contains('Electric')
          cy.get("img").should(
            "have.attr",
            "src",
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          )

          cy.get('div').find('div').should(($div) => {
            expect($div).to.have.length(2)

            const className = $div[0].className
            expect(className).to.match(/container/)
          }).then (($div) => {expect($div).to.have.css("display", "flex")})

    })
}

)
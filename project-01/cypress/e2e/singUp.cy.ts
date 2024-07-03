describe('Testa a pagina de sing up', ()=>{
    it ('quando clicar em ja tem cadastro deve ir para a tela de login', ()=>{
        cy.visit('/sign-up')

        cy.contains('ja tem cadastro? Clique aqui').click()
        cy.contains('Sign In')
        cy.contains('Login')
    })

    it ('o botao deve ter 10px margin top', ()=>{
        cy.visit('/sign-up')

        cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
    })
})
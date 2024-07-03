describe('testa a pafina de login', () => {

  beforeEach(()=>{
    cy.visit('/')
  })

  it('quando clicar em login deve ir para a pagina de dashboard', () => {
    

    cy.intercept('GET', 'http://localhost:5000/pokemon', {
      fixture: 'pokemons.json'
    });

    cy.contains("Login").click();
    cy.contains("Dashboard");
  })

  it('quando clicar em login deve ir para a pagina de dashboard', () => {
    

    cy.intercept('GET', 'http://localhost:5000/pokemon', {
      fixture: 'pokemons.json'
    });

    cy.contains("Login").click();
    cy.contains("Dashboard");
    cy.contains("Pikachu")
  })

  it('quando clicar em sing up deve ir para tela de cadastro', () => {
    
    cy.contains('Não tem cadastro? Clique aqui').click();
    cy.contains("Cadastre-se");
  })

  it ('o botao deve ter 10px margin top', ()=>{
    

    cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
})

  it ('digitar email', ()=>{
    
    cy.get("#email").type("pedro")

  })
})
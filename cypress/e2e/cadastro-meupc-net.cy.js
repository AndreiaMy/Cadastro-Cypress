describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {

    // Entrando no website escolhido meu pc net
    cy.visit('https://meupc.net')

    // Esperando 1 segundo para executar as funções abaixo
    cy.wait(1000)

    // Clicando no botão do menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()

    // Clicando no botão de cadastro 
    cy.get('ul.menu-list').children('li')
    .children('a[href="https://meupc.net/cadastro"]') //Pegando o filho que tem o hrf com o valor https://meupc.net/cadastro
    .click()

    // Preenchendo o campo nome do cadastro com o valor Kaique teste
    cy.get('input[name="nome"]').type('Kaique teste')

    // Preenchendo o campo email do cadastro com o valor johndoe@example
    cy.get('input[name="email"]').type('johndoe@example')

    // Preenchendo o campo senha do cadastro com o valor 12345678
    cy.get('input[placeholder="Defina uma senha"]').type('12345678')

    // Clicando no checkbox de aceitar os termos
    cy.get('input[type="checkbox"]').check({ force: true})

    //Clicando no botão de cadastrar 

    cy.contains('Cdastrar-se').click()

    //Verificando se chegamos na tela do castro 
    cy.contains('Escolha seu nome de usuario').should('be.visible')

  })
})
describe('listagem de curso', () => {
    it('Deve listar os cursos cadastrados', () => {
        cy.visit('http://localhost:5173')
        cy.get('.input-nome-curso').type('Curso teste 7')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)


        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()

                cy.visit('http://localhost:5173')
        cy.get('.input-nome-curso').type('Curso teste 8')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()

        cy.get(".div-cursos")
            .children()
            .should('have.length.at.least', 2)

    })
})
describe('Cadastro de curso', () => {
    it('Deve cadastrar um novo curso com sucesso', () => {
        cy.visit('http://localhost:5173')
        cy.get('.input-nome-curso').type('Curso teste')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()

        cy.wait(1000)

        cy.get('.div-cursos')
            .then($divCursos => {
                if (!$divCursos.text().includes('Curso teste')) {
                    throw new Error('Curso não cadastrado com sucesso')
                }
            })
    })
})
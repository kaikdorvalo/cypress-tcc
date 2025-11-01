describe('Criar disciplina', () => {
    it("Deve criar disciplina em um curso", () => {
        cy.visit('http://localhost:5173')
        cy.get('.input-nome-curso').type('Curso teste 2')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()
        cy.wait(1000)

        cy.contains("div", "Curso teste 2")
            .parent()
            .find("button:has(svg.lucide-plus)")
            .click()
        
        cy.contains("div", "Curso teste 2")
            .parent()
            .find("input")
            .type("Disciplina teste")

        cy.contains("div", "Curso teste 2")
            .parent()
            .find("button:has(svg.lucide-save)")
            .click()
    })
})
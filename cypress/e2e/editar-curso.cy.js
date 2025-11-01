describe('Editar curso', () => {
    it("Deve editar um curso existente", () => {
        cy.visit('http://localhost:5173')
        cy.get('.input-nome-curso').type('Curso teste 3')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()
        cy.wait(1000)

        cy.get('.input-nome-curso').clear()
        cy.get('.input-carga-horaria').clear()

        cy.contains("div", "Curso teste 3")
            .parent()
            .find("button:has(svg.lucide-square-pen)")
            .click()

        cy.get("input[value='Curso teste 3']")
            .clear()
            .type('Curso teste 3 editado')
        
        cy.get("input[value='50']")
        .type('{selectall}60')

        cy.wait(1000)

        cy.get('.button-open-calendar-editar').click()
        cy.contains('select', '2025').select('2023')
        cy.contains('button', '17').click()

        cy.get("input[value='Curso teste 3 editado']")
        .closest('.w-80')
        .find('#card-header')
        .find("button:has(svg.lucide-save)")
        .click()

    })
})
import { baseUrl } from "../config/base-url"

describe('exclusão de curso', () => {
    it('Deve excluir um curso', () => {
        cy.visit(baseUrl)
        cy.get('.input-nome-curso').type('Curso teste 6')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()

        cy.wait(1000)

        cy.contains("div", "Curso teste 6")
            .parent()
            .find("button:has(svg.lucide-square-pen)")
            .click()
            .parent()
            .find("button:has(svg.lucide-trash)")
            .click()

        cy.contains('button', 'Confirmar').click()
    })
})
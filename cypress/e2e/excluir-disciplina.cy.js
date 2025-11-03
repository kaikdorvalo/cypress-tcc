import { baseUrl } from "../config/base-url"

describe('Exclusão de disciplina', () => {
    it("Deve excluir uma disciplina em um curso", () => {
        cy.visit(baseUrl)
        cy.get('.input-nome-curso').type('Curso teste 5')
        cy.get('.input-carga-horaria').type(50)

        cy.get('.button-open-calendar').click()
        cy.wait(1000)

        cy.contains('select', '2025').select('2019')
        cy.contains('button', '15').click()

        cy.contains('button', 'Criar curso').click()
        cy.contains('button', 'Confirmar').click()
        cy.wait(1000)

        cy.contains("div", "Curso teste 5")
            .parent()
            .find("button:has(svg.lucide-plus)")
            .click()
        
        cy.contains("div", "Curso teste 5")
            .parent()
            .find("input")
            .type("Disciplina teste")

        cy.contains("div", "Curso teste 5")
            .parent()
            .find("button:has(svg.lucide-save)")
            .click()

        cy.wait(1000)

        cy.contains("div", "Curso teste 5")
            .parent()
            .find("div.discipline-card")
            .find("button:has(svg.lucide-square-pen)")
            .click()
            .parent()
            .find("button:has(svg.lucide-trash)")
            .click()

        cy.contains('button', 'Confirmar').click()
    })
})
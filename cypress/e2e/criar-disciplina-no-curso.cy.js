import { baseUrl, apiUrl } from "../config/base-url"

describe('Criar disciplina', () => {
    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste', workload: 50, startDate: '2019-11-15' })
    })

    it("Deve criar disciplina em um curso", () => {
        cy.visit(baseUrl)

    cy.get('[data-testid="btn-create-discipline"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

        cy.get('[data-testid="input-discipline-name"]')
        .should('be.visible')
        .type("Disciplina teste")
        .should('have.value', 'Disciplina teste')

        cy.get('[data-testid="btn-discipline-actions"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

        cy.get('[data-testid="discipline-list"]')
        .should('contain', 'Disciplina teste')
    })
})

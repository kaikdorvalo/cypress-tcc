import { baseUrl, apiUrl } from "../config/base-url"

describe('exclusão de curso', () => {
    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste', workload: 50, startDate: '2019-11-15' })
    })

    it('Deve excluir um curso', () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="courses-list"]').should('be.visible')

        cy.get('[data-testid="btn-save-or-edit"]')
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.get('[data-testid="btn-delete-course"]')
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.get('[data-testid="button-confirm-alert"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        cy.get('[aria-label="Notifications alt+T"]')
            .should('be.visible')
    })
})
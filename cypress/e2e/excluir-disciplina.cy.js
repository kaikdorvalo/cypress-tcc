import { baseUrl, apiUrl } from "../config/base-url"

describe('Exclusão de disciplina', () => {
    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, {
            name: 'Curso Teste',
            workload: 50,
            startDate: '2019-11-15',
        }).then((response) => {
            cy.request('POST', `${apiUrl}/course-disciplines/disciplines`, {
            id: response.body._id,
            name: 'Disciplina teste',
            });
        });
    })

    it("Deve excluir uma disciplina em um curso", () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="discipline-list"]')
            .should('be.visible')

        cy.get('[data-testid="btn-discipline-actions"]')
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.get('[data-testid="btn-delete-discipline"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        cy.get('[data-testid="button-confirm-alert"]')
            .should('be.visible')
            .and('not.be.disabled')

        cy.get('[data-testid="button-confirm-alert"]').click()

        cy.get('[aria-label="Notifications alt+T"]')
            .should('be.visible')

        cy.get('[data-testid="discipline-list"]')
            .should('not.contain', 'Disciplina teste editada')
    })
})
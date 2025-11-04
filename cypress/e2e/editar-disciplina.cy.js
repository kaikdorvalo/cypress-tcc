import { baseUrl, apiUrl } from "../config/base-url"

describe('Editar disciplina', () => {
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

    it("Deve editar uma disciplina em um curso", () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="discipline-list"]').should('be.visible')

        cy.get('[data-testid="btn-discipline-actions"]')
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.get('[data-testid="input-discipline-name"]')
            .should('be.visible')
            .and('not.be.disabled')

        cy.get('[data-testid="input-discipline-name"]')
            .clear()
            .type("Disciplina teste editada")
            .should('have.value', 'Disciplina teste editada')

        cy.get('[data-testid="btn-discipline-actions"]')
            .should('be.enabled')
            .click()

        cy.get('[data-testid="discipline-list"]')
            .should('be.visible')
            .and('contain', 'Disciplina teste editada')
    })
})
import { apiUrl, baseUrl } from "../config/base-url"

describe('Cadastro de curso', () => {

    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
    })
    
    it('Deve cadastrar um novo curso com sucesso', () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="input-course-name"]')
            .should('be.visible')
            .type('Curso teste')
            .should('have.value', 'Curso teste')

        cy.get('[data-testid="input-course-workload"]')
            .should('be.visible')
            .and('have.attr', 'type', 'number')
            .type('50')
            .should('have.value', '50')

        cy.get('[data-testid="button-open-calendar"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        cy.get('[aria-label="Choose the Year"]').should('exist').select('2019')
        cy.get('[aria-label="Choose the Month"]').should('exist').select('10')
        cy.get('[data-day="15/11/2019"]').should('be.visible').click()


        cy.get('[data-testid="button-submit"]')
            .should('be.visible')
            .click()

        cy.get('[data-testid="button-confirm-alert"]').should('be.visible').click()

        cy.get('[aria-label="Notifications alt+T"]').should('be.visible')
    })
})
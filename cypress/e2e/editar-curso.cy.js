import { baseUrl, apiUrl } from "../config/base-url"

describe('Editar curso', () => {

    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste', workload: 50, startDate: '2019-11-15' })
    })

    it("Deve editar um curso existente", () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="courses-list"]').should('be.visible')

        cy.get('[data-testid="btn-save-or-edit"]').click()
        cy.get('[data-testid="input-edit-course-name"]').should('be.visible')

        cy.get('[data-testid="input-edit-course-name"]')
            .clear()
            .type("Curso Teste Editado")
            .should('have.value', 'Curso Teste Editado')

        cy.get('[data-testid="input-edit-course-workload"]')
            .clear()
            .type("6")
            .should('have.value', '60')

        cy.get('[data-testid="btn-open-calendar-edit-course"]').click()
        cy.get('[aria-label="Choose the Year"]').should('exist')
        cy.get('[aria-label="Choose the Month"]').should('exist')

        cy.get('[aria-label="Choose the Year"]').select('2018').should('have.value', '2018')
        cy.get('[aria-label="Choose the Month"]').select('9').should('have.value', '9')
        cy.get('[data-day="09/10/2018"]').should('be.visible').click()

        cy.get('[data-testid="btn-save-or-edit"]').should('be.enabled').click()

        cy.get('[data-testid="courses-list"]')
            .should('be.visible')
            .and('contain', 'Curso Teste Editado')
            .and('contain', '60')
    })
})
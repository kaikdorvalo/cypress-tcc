import { baseUrl, apiUrl } from "../config/base-url"

describe('Editar curso', () => {

    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste', workload: 50, startDate: '2019-11-15' })
    })

    it("Deve editar um curso existente", () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="btn-save-or-edit"]').click()
        cy.get('[data-testid="input-edit-course-name"]').clear().type("Curso Teste Editado")
        cy.get('[data-testid="input-edit-course-workload"]').clear().type("60")
        
        cy.get('[data-testid="btn-open-calendar-edit-course"]')
            .click()

        cy.get('[aria-label="Choose the Year"]').should('exist').select('2018')
        cy.get('[aria-label="Choose the Month"]').should('exist').select('9')
        cy.get('[data-day="09/10/2018"]').should('be.visible').click()

        cy.get('[data-testid="btn-save-or-edit"]').click()

        cy.get('[data-testid="courses-list"]')
            .should('contain', 'Curso Teste Editado')
    })
})
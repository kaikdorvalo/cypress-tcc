import { baseUrl, apiUrl } from "../config/base-url"

describe('listagem de curso', () => {
    beforeEach(() => {
        cy.request('DELETE', `${apiUrl}/reset-db`)
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste', workload: 50, startDate: '2019-11-15' })
        cy.request('POST', `${apiUrl}/courses`, { name: 'Curso Teste 2', workload: 50, startDate: '2018-10-15' })
    })

    it('Deve listar os cursos cadastrados', () => {
        cy.visit(baseUrl)

        cy.get('[data-testid="courses-list"]')
            .contains('Curso Teste')

        cy.get('[data-testid="courses-list"]')
            .contains('Curso Teste 2')

    })
})
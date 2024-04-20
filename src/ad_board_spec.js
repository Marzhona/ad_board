// integration/ad_board_spec.js

describe('Ad Board', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('adds a new ad', () => {
      cy.get('input[name="title"]').type('New Ad Title');
      cy.get('textarea[name="description"]').type('This is a new ad description');
      cy.contains('Add').click();
      cy.contains('New Ad Title').should('exist');
      cy.contains('This is a new ad description').should('exist');
    });
  
    it('deletes an ad', () => {
      cy.get('.ad-item').first().find('button').contains('Delete').click();
      cy.contains('Ad deleted successfully').should('exist');
    });
  });
  
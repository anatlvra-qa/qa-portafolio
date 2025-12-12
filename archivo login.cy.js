describe('Login básico', () => {
  it('Login correcto', () => {
    cy.visit('https://example.com/login');
    cy.get('#email').type('usuario@demo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

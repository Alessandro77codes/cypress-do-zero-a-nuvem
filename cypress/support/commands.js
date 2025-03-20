Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName:'Alessandro',
    lastName:'carvalho santos',
    phone:'71982161336',
    email:'ale@gamail.com',
    text:'Test'
}) => { 
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.phone )
    cy.get('#open-text-area').type( data.text)
    cy.contains('button','Enviar').click()
})
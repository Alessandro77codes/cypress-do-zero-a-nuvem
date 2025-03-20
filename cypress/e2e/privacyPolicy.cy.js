it('testando sites',()=>{
   
    
        cy.visit('https://positivoon.com.br/entrar/')
        cy.get('.css-4qapa3 > .css-1msh118 > .css-1jjwf1f > .css-14hoqln > .chakra-input__group > [data-testid="iris-input"]').type(1225553)
        cy.get('.css-1onfmkx > .css-1msh118 > .css-1jjwf1f > .css-14hoqln > .chakra-input__group > [data-testid="iris-input"]').type(12565556)
        cy.get('form > [data-testid="iris-button"]').click()
        cy.get('[href="/esqueci-senha/"]').click()
        cy.get('[data-testid="iris-input"]').click()
                
       


    
    
  

   
   
})

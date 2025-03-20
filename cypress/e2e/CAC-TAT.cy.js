 describe('Central de Atendimentoao Cliente TAT',() => {
  beforeEach(() => {
    cy.visit('./src/index.html')

  })
  it('verificar o titulo da aplicação',() => {
   
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

  })
it('preenche os campos obrigatoris e envia o formulario', () => {// o comando only serve para disse que e´para testa somente o it escolhido 
  const longText= Cypress._.repeat('alessandro',10)
  cy.get('#firstName').type('Alessandro')
  cy.get('#lastName').type('carvalho  santos')
  cy.get('#email').type('ale@gmail.com')
  cy.get('#phone').type('71981131648')
  cy.get('#open-text-area').type(longText, { delay:0 })
  cy.get('.button[type="submit"]').click()

  cy.get('.success').should('be.visible')
})
it('exibe mensagem de erro ao submeter o fomulario com o email com formatação invalida', ()=>{
  

  cy.get('.error').should('be.visible')

})
it('campo telefonico continua vazio quando preencho com valor não-numerico',()=>{
  cy.get('#phone')
  .type('abcde')
  .should('have.value','')
})
it('exibe messagem de erro o telefone se totna obrigatorio mas não é preenchido antes do envio do formulario',()=>{
  cy.get('#firstName').type('Alessandro')
  cy.get('#lastName').type('carvalho  santos')
  cy.get('#email').type('ale@gmail,com') 
 cy.get('#open-text-area').type('Teste')
  cy.get('#phone-checkbox').click()
  cy.get('.button[type="submit"]').click()
  

  cy.get('.error').should('be.visible')
 
})
it('preenche e limpa os campos nome , sobrenome,email e telefone',() => {
  cy.get('#firstName')
  .type('Alessandro')
  .should('have.value','Alessandro')
  .clear()
  .should('have.value', '')

  cy.get('#lastName')
  .type('carvalho santos 8')
  .should('have.value','carvalho santos 8')
  .clear()
  .should('have.value', '')

  cy.get('#lastName')
  .type('alessandrosenior35@gmail.com')
  .should('have.value', 'alessandrosenior35@gmail.com')
  .clear()
  .should('have.value','')

  cy.get('#phone')
  .type('71988887777')
  .should('have.value','71988887777')
  .clear()
  .should('have.value','')

  

})
it('mensagem de erro ao submeter o formulario sem preencher os campos obrigatorios',()=>{
  cy.get('.button[type="submit"]').click()

  cy.get('.error').should('be.visible')


})
it('envia o formulario com sucesso usando um comando custumizado', () => {
  cy.fillMandatoryFieldsAndSubmit()

  cy.get('.success').should('be.visible')



})
it.only('envia o formulario com sucesso usando um comando custumizado', () => {

                          // apague porque eu so quero que vai ser enviado os comando padroes que esta na abba commands
  // const data ={
  //   firstName:'Alessandro',
  //   lastName:'carvalho santos',
  //   phone:'71982161336',
  //   email:'ale@gamail.com',
  //   text:'Teste'


  // }
  cy.fillMandatoryFieldsAndSubmit()

  cy.get('.success').should('be.visible')



})
                                  //  contains

                                  // antes
// cy.get('.button[type="submit"]').click()
//                                 // depois
// cy.contains('button','enviar').click()

                                    //  selecionado      opçoes no campo  
                                    // select  
                                    // tex                             ~es

it('seleciona um produto (you tube ) por seu texto' ,()=>{
  cy.get('#product')
  .select('YouTube')
  .should('have.value', 'youtube')

})
          // pegando o valor = value
it('selecionar um produto (mentoria) por seu valor(value)',()=>{
  cy.get('#product')
  .select('mentoria')
  .should('have.value','mentoria')
})
                        // indice
it('selecione um produto (blog) por seu indice',()=>{
  cy.get('#product')
  .select(1)
  .should('have.value','blog')
})
                        // marcando inputs do tipo radio
 it('vamos marcar opções do tipo inputs radio so que iremos marca o feedback',()=>{
  // cy.get('#support-type > :nth-child(4)')
  cy.get('input[type="radio"][value="feedback"]')
  .check()
  .should('be.checked')
  
 }) 
 it('vamos marcar o input do tipo radio em ajuda',()=>{
  cy.get('input[type="radio"][value="ajuda"]')
  .check()
  .should('be.checked')
 })
 it('agora iremos pega o input radio elogio',()=>{
  cy.get('input[type="radio"][value="elogio"]')
  .check()
  .should('be.checked')
 })  
 it('marca cada tipo de atendimento',()=>{
  cy.get('input[type="radio"]')
    .each((typeOfService)=>{
     cy.wrap(typeOfService)
     .check()
     .should('be.checked')
    })
 }) 
                        // marcando e desmarcando   (uncheck)
it('marca ambos checkboxes . depois desmarca o ultimo',()=>{
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .last()
  .uncheck()
  .should('not.be.checked')
  
  
})  
// na area de telefone ,foi marcado um click, mas agora iremos marcar um check
it('exibe messagem de erro o telefone se totna obrigatorio mas não é preenchido antes do envio do formulario',()=>{
  cy.get('#firstName').type('Alessandro')
  cy.get('#lastName').type('carvalho  santos')
  cy.get('#email').type('ale@gmail,com') 
 cy.get('#open-text-area').type('Teste')
  cy.get('#phone-checkbox').check()
  cy.get('.button[type="submit"]').click() 
})  
                                          // fazendo uploud do arquivos utilizando file (selectFile) 
it('selecionando um arquivo da pasta fixture',()=>{
  cy.get('#file-upload')
                                                                                   // vou em fixtures+em example.json.+clico no botão direito+clico em copy relative path
  .selectFile('cypress/fixtures/example.json')
                                                                                     // essa verificação com should é diferente;vai receber como argurmento uma função callback ()=>{}
  .should( input => {                                                  //  should vai receber input
    console.log(input)                                          //depois um console .log(input)+cypress App ,vou expecionar o arquivo +console
     expect(input[0].files[0].name).to.equal('example.json')  //vou em console.vai monstra quantos elementos foram achados
                                                               // ele encontrou um elemento
                                                              // em BAIXO EM jQuery.fn.init clicamos
                                                              // verificamos que tem um elemento e tem indice 0
                                                              //clica no 0:input#file-uploud na seta pra baixo
                                                              //clicamos na propriedade chamada files
                                                              //verificamos que o file tem o indice 0
                                                              //com name:example.json
                                                              //resumindo:agente vaipegar o input que esta sendo retornado
                                                              //vamos pega do indice zero a propriedades files
                                                              //vamos o file do indice zero e vamos compara com o 
                                                              //example json0
  })                               
                                                          
})
it('seleciona um arquivo simulando um drag-and-drop',()=>{
  cy.get('#file-upload')                                                                //pegando o input tipo file coma mira
  .selectFile('cypress/fixtures/example.json', { action:'drag-drop' })                               //encadeando select file como primeiro argumento o arquivo que eu quero fazer uploud
                                                                                                   //como segundo argumento vou colocar aspas,
                                                                                                    //vou colocar um objeto chamado action e dentro dele
                                                                                                     //drang-drop
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})
it('selecionar um arquivo utilizando uma fixture para a qual foi dada um alias',()=>{
  cy.fixture('example.json').as('sampleFile')
  cy.get('#file-upload')
  .selectFile('@sampleFile')
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})
it('verifica a politica de privacidade abre em outra aba sem a necessidade de um click',()=>{
  cy.contains('a','Política de Privacidade')   // o seletor de mira e muito generico ,poderia da erro por isso , coloquei um contains que pega o texto para nao ter erro ai ficou o seletor + nome 
  should('have.attr ', 'href', 'privacy.html') // tem o atributo ,qual o atributo que eu quero verificar se ele vai abrir na pagina de privacy
  and('have.attr','target','_black') //tbm quero verificar se ele abre em uma nova aba



})
it('acessa apagina da politica de privacidade removendo o target e então clicando no link' ,()=>{
  cy.contains('a','Política de Privacidade') 
  .invoke('removeAttr','target')
  .click()
  cy.contains('h1','CAT TAT - Politica de privacidade')
  .should('be.visible')
})

})
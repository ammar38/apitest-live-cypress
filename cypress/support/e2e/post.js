it('Create A User', () => {
    let body = 
        {
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "amr",
            "lastName": "sngkr",
            "email": "123",
            "password": "12345",
            "phone": "1234321",
            "userStatus": 0
          }
          console.log(body)
          cy.request('POST', '/user', body).as('createUser');
          //adds new todo item by defining TODO name
          cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200);
        })
})
describe('Petstore API Register Testing', () => {
    it('Create A User', () => {
        let body = 
            {
                "id": 0,
                "username": Cypress.env('username'),
                "firstName": "amr",
                "lastName": "sngkr",
                "email": "123",
                "password": Cypress.env('password'),
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

    const loginUser = {
        method : "GET",
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }

    it('Login Registered User', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200);
        })
    })
}) 
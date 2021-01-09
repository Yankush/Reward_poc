/// <reference types="cypress" />

describe("Conduit user login", ()=>{

    beforeEach("Test react website XHR", ()=>{
        cy.visit("https://react-redux.realworld.io/");
        
    })

    //performing XHR operation
    it("Verify login response XHR", ()=> {
        
        cy.server();
        cy.route({
            method:'POST',
            url:'https://conduit.productionready.io/api/users/login'
        }).as('login');

        //click on login link
        cy.contains("Sign in").click();

        cy.get("input[placeholder='Email']").type("yprasad@woolworths.com.au");
        cy.get("input[placeholder='Password']").type("String12");
        cy.get("button[type='Submit']").click();

        cy.get("a[href='#@Yankush']").should(($loginName) => {
            const loginHeaderName = $loginName.text()
            expect(loginHeaderName).to.include('Yankush')
        })

        cy.get('@login').then((loginXHR) =>{
            expect(loginXHR.status).to.eq(200);
            expect(loginXHR.response.body).to.have.property('user')
        })


    })
})

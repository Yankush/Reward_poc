/// <reference types="cypress" />


describe("Testing conduit application", () => {

    beforeEach("Login to application", () =>{
        cy.visit("https://react-redux.realworld.io")
       // cy.viewport(1280, 720)
        cy.fixture("Login").as("user");
    })

    // it("Perform benefit check", () =>{
    //     cy.get("@user").then((user) =>{
            
    //         cy.login(user.UserName, user.Password);
            
    //     })
        
    // })

    it("Login into conduit",() =>{
        //click on login link
        cy.contains("Sign in").click();

        cy.get("input[placeholder='Email']").type("yprasad@woolworths.com.au");
        cy.get("input[placeholder='Password']").type("String12");
        cy.get("button[type='Submit']").click();

        cy.get("a[href='#@Yankush']").should(($loginName) => {
            const loginHeaderName = $loginName.text()
            expect(loginHeaderName).to.include('Yankush')
        })
    })

    it("Login into conduit using parameterization",() =>{
        //click on login link
        cy.contains("Sign in").click();

        cy.get("@user").then((user)=>{
        cy.get("input[placeholder='Email']").type(user.userName);
        cy.get("input[placeholder='Password']").type(user.password);
        })
        cy.get("button[type='Submit']").click();

        cy.get("a[href='#@Yankush']").should(($loginName) => {
            const loginHeaderName = $loginName.text()
            expect(loginHeaderName).to.include('Yankush')
        })
    })

})
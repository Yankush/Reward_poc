import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { conduitAppLoginPage } from "../../examples/pages/conduitLoginPage";



Given('I navigate to login page', () =>{
    cy.visit('https://react-redux.realworld.io')
    cy.contains("Sign in").click();
})

When('I enter the login details', datatable =>{

    datatable.hashes().forEach( row => {
        cy.get("input[placeholder='Email']").type(row.username);
        cy.get("input[placeholder='Password']").type(row.password);
    });    
    cy.get("button[type='Submit']").click();
})

Then('I see home page', datatable =>{
    cy.get("a[href='#@Yankush']").should(($loginName) => {
        const loginHeaderName = $loginName.text()
        expect(loginHeaderName).to.include('Yankush')
    })
})

When('I enter the login details by following page object', datatable =>{

    datatable.hashes().forEach(row => {
        conduitAppLoginPage.performLogin(row.userName, row.Password)
    });
    conduitAppLoginPage.clickLoginButton();
})
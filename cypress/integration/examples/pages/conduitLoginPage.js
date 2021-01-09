/// <reference types ="Cypress"/> 

export class conduitLoginPage {

    performLogin(userName, Password){
        cy.get("input[placeholder='Email']").type(userName);
        cy.get("input[placeholder='Password']").type(Password);
    }

    clickLoginButton(){
        cy.get("button[type='Submit']").click();
    }      
}

export const conduitAppLoginPage = new conduitLoginPage();
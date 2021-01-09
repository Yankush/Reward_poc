/// <reference types="cypress"/>


context("Test api from json server", () =>{

    var otptoken
    it("Send otp to mobile", () =>{

        cy.request({
            method:'POST',
            url:'https://test-api.woolworthsrewards.com.au/wx/v1/rewardspartner/secure/code2login/link?state=3493498398',
            headers:{
                'Content-Type': 'application/json',  
                'client_id'    : 'ziNod3QOHKWijNid2rMMfSIX0allMnGy'
            },
            body:{
                
                    "username":"9355048866387",
                    "sendTo": "Email"
                
            }
        }).then((res) =>{
            //cy.log(res);
            expect(res.status).to.eq(200);

            let jsonResponse = JSON.stringify(res.body);  
            cy.log("RESPONSE JSON ::" + jsonResponse);

            var obj = JSON.parse(jsonResponse);
            otptoken = JSON.stringify(obj.data.otptoken)
           // alert(xyz);
            //cy.log(xyz);
            //cy.log(res.body.otptoken);
           // expect(res.body).has.property
           //const message = res.body.
        })
    })

    it("Verify mobile OTP", () =>{

        cy.request({
            method:'POST',
            url:'https://apigee-test.api-wr.com/wx/api-otp/code2login/verifyotp',
            headers:{
                'Content-Type': 'application/json',  
                'client_id'    : 'ziNod3QOHKWijNid2rMMfSIX0allMnGy',
                'otptoken': otptoken
            },
            body:{
                    "otpcode":"123456"
            }
        }).then((res) =>{

            cy.log(res);
            expect(res.status).to.eq(201);
            
            let jsonResponse = JSON.stringify(res.body);  
            cy.log("RESPONSE JSON ::" + jsonResponse);
           // expect(res.body).has.property
           //const message = res.body.
        })
    })

});
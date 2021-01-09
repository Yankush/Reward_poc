Feature: Login 

    Test login

    @smoke
    Scenario: Sign in conduit application
    Given I navigate to login page
    When I enter the login details
    |username                 |password|
    |yprasad@woolworths.com.au|String12|
    Then I see home page
  
    Scenario: Test login feature via page object
    Given I navigate to login page
    When I enter the login details by following page object
    |userName                 |Password|
    |yprasad@woolworths.com.au|String12|
    Then I see home page
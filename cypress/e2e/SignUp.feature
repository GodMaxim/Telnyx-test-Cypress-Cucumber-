Feature: SignUp

Scenario: Verify navigation to the Sign-Up page
   When I click on "Start building" button
   Then I should be redirected to "https://telnyx.com/sign-up"
   And I should see "Create your account" title
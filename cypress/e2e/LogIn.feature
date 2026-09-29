Feature: LogIn

  Scenario: Resend verification email
    When I open the login page
    Then the "Welcome Back" text should be displayed
    And the URL should contain "portal.telnyx.com/#/login/sign-in"
    When I enter email "myemail@gmail.com" into the login email field
    And I click on "Resend" button
    When I confirm resend verification email by entering email "myemail@gmail.com" again
    And I click on "Send email" button
    Then I should see the success message

   Scenario: Validation of invalid email address on the Login page
    When I open the login page
    Then the "Welcome Back" text should be displayed
    And the URL should contain "portal.telnyx.com/#/login/sign-in"
    When I enter email "myemail@l.com" into the login email field
    And I click on "Send me sign-in link" button
    Then the error message "Please enter a valid email address" should be displayed
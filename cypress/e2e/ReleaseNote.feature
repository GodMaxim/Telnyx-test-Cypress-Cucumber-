Feature: Release notes

   Scenario: Subscribe to automated emails
    When I open the Global Communication page
    And I open the "Release note" page
    And I enter a unique email into the email field
    And I click on the Subscribe button
    Then I should see the success icon

  Scenario: Filter release notes by product
    When I open the Global Communication page
    And I open the "Release note" page
    And I choose "API" from the product filter
    Then the URL should contain "api"
    And the results should contain "API"
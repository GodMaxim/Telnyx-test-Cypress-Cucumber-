Feature: Integrations

  Scenario: Verify search functionality for GitHub integration
    When I click on "Developers" menu item
    And I click on "Integrations" option
    And I click on "Search integrations" input field
    And I search integration for "GitHub"
    And I click on "Set up" link
    Then the URL should contain "integrations/github"
    And the page should contain "github" heading
Feature: Pricing

  Scenario: Verify currency switching functionality
    When I click on "Pricing" button in navigation menu
    And I click on "View all pricing" in Pricing menu
    And I select "Numbers"
    And I scroll to rates "What's on the card." section
    And I verify the "Currency" switcher is clickable
    When I change the currency to "Euro"
    Then the prices should be displayed in EUR
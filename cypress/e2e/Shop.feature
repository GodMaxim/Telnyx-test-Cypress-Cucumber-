Feature: Shop

  Scenario: Verify product search functionality
    When I open the shop page via Global Communication
    And I search for someitem "Hoodie"
    Then the product card should be visible

  Scenario: Verify currency switcher on the shop page
    When I open the shop page via Global Communication
    And I select country "Ukraine"
    Then the prices should be displayed in Ukrainian Hryvnia
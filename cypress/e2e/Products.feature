Feature: Products

  Scenario: Verify search and filter on Open Source Builds page
    When I open the Products menu
    And I select "View all primitives" from the menu
    And I click on "Browse all 200+" button
    And I select "Python" language filter
    Then the URL should contain "lang=python"
    When I search for build "Chat"
    Then the search results should contain "Chat"
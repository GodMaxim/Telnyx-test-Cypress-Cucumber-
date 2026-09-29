Feature: Global Communication

Scenario: Verify Search numbers functionality
  When I open the Global Communication page
  And I scroll to "A global carrier that gets better as you grow" title
  When I search for number "Canada"
  Then "Canada" should be displayed in the results
  When I search for number "Ukr"
  Then "Ukraine" should be displayed in the results
  When I search for number "J"
  Then "Jamaica" should be displayed in the results
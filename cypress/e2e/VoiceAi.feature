Feature: Voice AI

  Scenario: Change language to French
    When I open the Voice AI page
    And I switch the page language to French
    Then the URL should contain "/fr"

  Scenario: Verify dynamic price updates for Voice AI options
    When I open the Voice AI page
    And I scroll to "Pricing you control" title
    And I click on "SEE PRICING" button
    Then the URL should contain "pricing/voice-ai-agents"
    And the initial cost should be "$0.06"
    When I select "Premium third-party" add-on
    Then the estimated cost should contain "Premium third-party"
    When I select "Call recording" add-on
    Then the estimated cost should contain "Call recording"
    When I select "SMS follow-up" add-on
    Then the estimated cost should contain "SMS follow-up"
    And the final cost should be "$0.07"
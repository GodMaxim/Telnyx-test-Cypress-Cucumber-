Feature: MainMenu

Scenario: Verify dynamic price updates in "Price Your Workload" section
    When I scroll to "Price your workload" section
    Then the monthly price should be "$76,800"
    When I set "Conversations per month" to "300000"
    Then the monthly price should be "$48,000"
    When I set "Average mins per conversation" to "1"
    Then the monthly price should be "$7,050"
    When I set "SMS follow-ups per conversation" to "3"
    Then the monthly price should be "$7,650"
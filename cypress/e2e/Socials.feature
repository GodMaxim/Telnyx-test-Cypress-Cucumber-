Feature: Socials

  Scenario Outline: Verify social link points to correct URL
    When I scroll to the footer
    Then the "<social>" link should point to "<url>"

    Examples:
      | social   | url                                          |
      | LinkedIn | https://www.linkedin.com/company/telnyx      |
      | X        | https://x.com/telnyx                         |
      | Facebook | https://www.facebook.com/Telnyx/             |
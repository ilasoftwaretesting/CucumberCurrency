@Currency

Feature: User should be on homepage
        so i can select the currency from top left corner to US dollar or Euro

  Scenario: I able to select currency

    Given I am on homepage
    When I click on drop down to see currency option
    And I select currency US Dollar
    Then I able to see product price as per us dollar selection
    And I select currency Euro from dropdown list
    Then I should able to see the price of the all products in Euro currency


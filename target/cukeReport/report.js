$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/Currency.feature");
formatter.feature({
  "line": 3,
  "name": "User should be on homepage",
  "description": "      so i can select the currency from top left corner to US dollar or Euro",
  "id": "user-should-be-on-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Currency"
    }
  ]
});
formatter.before({
  "duration": 7783668559,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I able to select currency",
  "description": "",
  "id": "user-should-be-on-homepage;i-able-to-select-currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on drop down to see currency option",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select currency US Dollar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I able to see product price as per us dollar selection",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select currency Euro from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should able to see the price of the all products in Euro currency",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_homepage()"
});
formatter.result({
  "duration": 86878718,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_drop_down_to_see_currency_option()"
});
formatter.result({
  "duration": 149580245,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_currency_US_Dollar()"
});
formatter.result({
  "duration": 77757750,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_able_to_see_product_price_as_per_us_dollar_selection()"
});
formatter.result({
  "duration": 76039,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_currency_Euro_from_dropdown_list()"
});
formatter.result({
  "duration": 1515330990,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_should_able_to_see_the_price_of_the_all_products_in_Euro_currency()"
});
formatter.result({
  "duration": 2707088,
  "status": "passed"
});
formatter.after({
  "duration": 18660,
  "status": "passed"
});
});
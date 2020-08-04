package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef {

    Currency currency = new Currency();

    @Given("^I am on homepage$")
    public void i_am_on_homepage()  {


    }

    @When("^I click on drop down to see currency option$")
    public void i_click_on_drop_down_to_see_currency_option(){
        currency.clickCurrency();

    }

    @When("^I select currency US Dollar$")
    public void i_select_currency_US_Dollar()  {
        currency.UsDollar();

    }

    @Then("^I able to see product price as per us dollar selection$")
    public void i_able_to_see_product_price_as_per_us_dollar_selection() {
        System.out.println("i can see price in Us Dollar");

    }

    @Then("^I select currency Euro from dropdown list$")
    public void i_select_currency_Euro_from_dropdown_list()  {
        currency.Euro();

    }

    @Then("^I should able to see the price of the all products in Euro currency$")
    public void i_should_able_to_see_the_price_of_the_all_products_in_Euro_currency()  {
        System.out.println("i can see price in Euro ");

    }

}
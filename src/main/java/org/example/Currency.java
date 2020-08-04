package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.ClickOnElement;
import static org.example.Utils.waitForElementToBeDisplay;

public class Currency {
    private By clickCurrency = By.id("customerCurrency");
    private By selectUsCurrency = By.xpath("//div[@class=\"currency-selector\"]//option[1]");
    private By selectEuroCurrency = By.xpath("//div[@class=\"currency-selector\"]//option[2]");


    public void clickCurrency() {
        waitForElementToBeDisplay(clickCurrency,20);
        ClickOnElement(clickCurrency);


    }
    public void UsDollar(){
        waitForElementToBeDisplay(selectUsCurrency,20);
        ClickOnElement(selectUsCurrency);
    }
    public void Euro(){
        waitForElementToBeDisplay(selectEuroCurrency,20);
        ClickOnElement(selectEuroCurrency);
    }
}

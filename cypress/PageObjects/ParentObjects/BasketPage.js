class BasketPage {
PAGE_URL = "https://test.ipayimpact.co.uk/Test/Basket"
PAGE_HEADING = "(//h4[contains(text(),'Shopping Basket')])[1]"
ESTABLISHMENT_NAME = "(//td[contains(text(),'SAAuto1')])[1]"
BTN_REMOVE_ALL_ITEMS = "(//button[text()='Remove all items'])[1]"
TEXT_NO_ITEM = "//p[normalize-space()='There are currently no items in your basket.']"
BTN_CONTINUE_SHOPPING = "//a[normalize-space()='Continue Shopping']"
BTN_PROCEED_CHECKOUT    = "#ProceedToCheckOut"
BTN_AMEND = "(//button[text()='Amend'])[1]"
TEXT_AMOUNT_AMEND = "(//td[text()='£30.00'])[1]"
BTN_REMOVE = "(//button[text()='Remove'])[1]"
TEXT_AMOUNT = "(//td[text()='£10.00'])[1]"
TEXT_CHARITY_FUND = "(//td[contains(text(),'Charity Test Automation Fund')])[1]"
TEXT_PREORDER_FUND = "(//td[contains(text(),'Pre-order School Meals')])[1]"
TEXT_TRIP_FUND = "(//td[contains(text(),'Test April Fund')])[1]"
TEXT_MILK_FUND = "(//td[contains(text(),'Fund Test Automation Milk')])[1]"
BTN_CHECKOUT = "#ProceedToCheckOut"
BTN_CHECKOUT_BACK = "#scp_cardPage_buttons_back_button"
clickCheckoutBackButton()
{
    cy.get(this.BTN_CHECKOUT_BACK).click();
}
clickCheckoutButton()
{
    cy.get(this.BTN_CHECKOUT).click();
}
clickAmendActionButton()
{
    cy.xpath(this.BTN_AMEND).click();
}
clickProceedCheckoutButton()
{
    cy.get(this.BTN_PROCEED_CHECKOUT).click();
}
clickContinueShoppingButton()
{
    cy.xpath(this.BTN_CONTINUE_SHOPPING).click();
}
clickRemoveButton()
{
    cy.xpath(this.BTN_REMOVE).click();
}
clickRemoveAllItemsButton()
{
    cy.xpath(this.BTN_REMOVE_ALL_ITEMS).click();
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.PAGE_URL);
    cy.xpath(this.PAGE_HEADING).contains("Shopping Basket");
}
verifyEstablishmentName()
{
    cy.xpath(this.ESTABLISHMENT_NAME).contains("SAAuto1");
}
verifyNoItemText()
{
    cy.xpath(this.TEXT_NO_ITEM).contains("There are currently no items in your basket.");
}
verifyAmountText()
{
    cy.xpath(this.TEXT_AMOUNT_AMEND).contains('£30.00');
}
verifyBasketAmount()
{
    cy.xpath(this.TEXT_AMOUNT).contains("£10.00");
}
verifyCharityFund()
{
    cy.xpath(this.TEXT_CHARITY_FUND).contains("Charity Test Automation Fund");
}
verifyPreOrderFund()
{
    cy.xpath(this.TEXT_PREORDER_FUND).contains("Pre-order School Meals");
}
verifyTripFund()
{
    cy.xpath(this.TEXT_TRIP_FUND).contains("Test April Fund");
}
verifyMilkFund()
{
    cy.xpath(this.TEXT_MILK_FUND).contains("Fund Test Automation Milk");
}
}
export default BasketPage

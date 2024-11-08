class FundListPage {
  Heading_Page = "//h4[normalize-space()='Funds for AccountAuto1 Test']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Accounts/SelectAccount?AccountID";
BTN_HISTORY = "(//a[contains(text(),'History')])[2]"
BTN_PREORDER_PAY = "(//a[contains(text(),'Pay')])[2]"
BTN_TRIP_PAY = "(//a[contains(text(),'Pay')])[4]"
BTN_TRIP_DETAILS = "(//a[contains(text(),'Details')])[1]"
BTN_TRIP_HISTORY = "(//a[contains(text(),'History')])[3]"
BTN_MILK_HISTORY = "(//a[contains(text(),'History')])[4]"
BTN_LA_HISTORY = "(//a[contains(text(),'History')])[8]"
BTN_PREORDER_AUTOPAY = "(//a[normalize-space()='Auto Pay'])[2]"
BTN_TRIP_AUTOPAY = "(//a[normalize-space()='Auto Pay'])[3]"
BTN_MILK_AUTOPAY = "(//a[normalize-space()='Auto Pay'])[4]"
BTN_TRIP_PAY = "(//a[@title='Single Payment'][normalize-space()='Pay'])[2]"
BTN_MILK_PAY = "(//a[@title='Single Payment'][normalize-space()='Pay'])[3]"
BTN_LA_BOOK = "(//a[contains(text(),'Book')])[1]"
BTN_SHOP = "(//a[contains(text(),'Shop')])[1]"
clickShopButton()
{
  cy.xpath(this.BTN_SHOP).click();
}
clickLABookButton()
{
  cy.xpath(this.BTN_LA_BOOK).click();
}
clickMilkPayButton()
{
  cy.xpath(this.BTN_MILK_PAY).click();
}
clickTripPayButton()
{
  cy.xpath(this.BTN_TRIP_PAY).click();
}
clickMilkAutoPayButton()
{
  cy.xpath(this.BTN_MILK_AUTOPAY).click();
}
clickTripAutoPayButton()
{
  cy.xpath(this.BTN_TRIP_AUTOPAY).click();
}
clickPreOrderAutoPayButton()
{
  cy.xpath(this.BTN_PREORDER_AUTOPAY).click();
}
clickLAHistoryButton()
{
  cy.xpath(this.BTN_LA_HISTORY).click();
}
clickMilkHistoryButton()
{
  cy.xpath(this.BTN_MILK_HISTORY).click();
}
clickTripHistoryButton()
{
  cy.xpath(this.BTN_TRIP_HISTORY).click();
}
clickTripDetailsButton()
{
  cy.xpath(this.BTN_TRIP_DETAILS).click();
}
clickPreOrderPayButton()
{
  cy.xpath(this.BTN_PREORDER_PAY).click();
}
clickTripPayButton()
{
  cy.xpath(this.BTN_TRIP_PAY).click();
}
clickHistoryButton()
{
  cy.xpath(this.BTN_HISTORY).click();
}
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Funds for AccountAuto1 Test");
  }
}
export default FundListPage;

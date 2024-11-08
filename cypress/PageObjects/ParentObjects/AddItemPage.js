class AddItemPage {
  Heading_Page = "//h3[normalize-space()='Adding Item']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Basket/AddPayment?FundID";
AMOUNT_FIELD = "#Amount"
BTN_SAVE_ITEM = "#btnSubmit"
BTN_FUND_LIST = "//a[normalize-space()='Fund list']"
CHECKBOX_CONSENT = "#OnlineParentalPermission"
HEADING_PERMISSION_MODULE = "(//h4[normalize-space()='Online Permission'])[1]"
BUTTON_CONSENT = "#btnContinueOnline"
clickConsentButton()
{
  cy.get(this.BUTTON_CONSENT).click();
}
verifyPermissionModuleHeading() {
  cy.xpath(this.HEADING_PERMISSION_MODULE)
    .should("be.visible")
    .and("contain", "Online Permission");
}
clickConsentCheckbox()
{
  cy.get(this.CHECKBOX_CONSENT).click();
}
clickFundListButton()
{
  cy.xpath(this.BTN_FUND_LIST).click();
}
typeAmount()
{
  cy.get(this.AMOUNT_FIELD).type("1");
}
typeAmountInTrip()
{
  cy.get(this.AMOUNT_FIELD).clear();
  cy.get(this.AMOUNT_FIELD).type("1");
}
clickSaveItemButton()
{
  cy.get(this.BTN_SAVE_ITEM).click();
}
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Adding Item");
  }
}
export default AddItemPage;

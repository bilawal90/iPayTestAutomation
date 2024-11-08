class LABookPage {
  Heading_Page = "//h3[normalize-space()='LA Test Automation Fund']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Fund/ShowLimitedFundDetails?";
BTN_SAVE_ITEM = "//input[@id='btnSubmit']"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
BASKET_VALIDATION = "//span[@data-valmsg-for='PurchaseLimit']"
verifyBasketValidation()
{
  cy.xpath(this.BASKET_VALIDATION)
  .should("be.visible")
  .and("contain", "You've already purchased item(s) for the selected date & time");
}
clickCancelButton()
{
  cy.xpath(this.BTN_CANCEL).click();
}
clickSaveItem()
{
  cy.xpath(this.BTN_SAVE_ITEM).click({force: true});
}
  verifyHeadingAndURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "LA Test Automation Fund");
  }
}
export default LABookPage;

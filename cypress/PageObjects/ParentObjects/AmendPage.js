class AmendPage {
  Heading_Page = "//h3[normalize-space()='Amending Item']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Basket/Amend?BasketDetailID";
  TEXTBOX_AMOUNT = "#Amount"
  BTN_FUND_LIST = "//a[normalize-space()='Fund list']"
  BTN_SAVE_ITEM = "#btnSubmit"
  clickFundListButton()
  {
    cy.xpath(this.BTN_FUND_LIST).click()
  }
  verifyHeadingandURL() {
    cy.url().should("contain", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Amending Item");
  }
  enterAmendAmount()
  {
    cy.get(this.TEXTBOX_AMOUNT).clear()
    cy.get(this.TEXTBOX_AMOUNT).type("30")
  }
  clickSaveItemButton()
  {
    cy.get(this.BTN_SAVE_ITEM).click()
  }
}
export default AmendPage;

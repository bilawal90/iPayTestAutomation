class LinkAccountPage {
  Heading_Page = "//h3[normalize-space()='Link Account']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Accounts/LinkNewAccount";
  BTN_FIND_ACCOUNT = "#btnFindAccount";
  TEXTBOX_ACCOUNT_REF = "#AccountKey"
  VALIDATION_NOT_FOUND = "#childDiv"
VALIDATION_FOUND = "#schoolDiv"
  verifyHeadingandURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Link Account");
  }
  verifyNotFoundValidation() {
    cy.get(this.VALIDATION_NOT_FOUND)
      .should("be.visible")
      .and("contain", "Account Not Found");
  }
  verifyFoundValidation() {
    cy.get(this.VALIDATION_FOUND)
      .should("be.visible")
      .and("contain", "Primary 1010");
  }
  clickFindAccountButton() {
    cy.get(this.BTN_FIND_ACCOUNT).should("be.visible");
    cy.get(this.BTN_FIND_ACCOUNT).click();
  }
  FindAccountRefTextboxAndButton() {
    cy.get(this.TEXTBOX_ACCOUNT_REF).should("be.visible");
    cy.get(this.BTN_FIND_ACCOUNT).should("be.visible");
  }
  SearchWrongRefKey()
  {
    cy.get(this.TEXTBOX_ACCOUNT_REF).type("abc")
    cy.get(this.BTN_FIND_ACCOUNT).click()
    cy.get(this.BTN_FIND_ACCOUNT).click()
  }
  SearchCorrectRefKey()
  {
    cy.get(this.TEXTBOX_ACCOUNT_REF).clear()
    cy.get(this.TEXTBOX_ACCOUNT_REF).type("c8MMSacrL(")
    cy.get(this.BTN_FIND_ACCOUNT).click()
  }
}
export default LinkAccountPage;

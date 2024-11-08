class AccountDescriptionsPage {
  Heading_Page = "//h3[normalize-space()='Account Descriptions']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Institution/AccountDescriptions";
  ADD_ACCOUNT_Page_URL = "https://test.ipayimpact.co.uk/Test/Institution/AccountDescriptionDetail?AccountTypeDescriptionID=0";
  BTN_ADD_ACCOUNT = "//a[normalize-space()='Add New Account Description']"
  ADD_ACCOUNT_Heading_Page = "//h3[normalize-space()='Add Account Description']"
BTN_SAVE = "#btnSubmit"
BTN_CANCEL = "//a[normalize-space()='Cancel']"
VALIDATION_ACCOUNT_TYPE = "#AccountTypeID-error"
VALIDATION_DESCRIPTION = "#Description-error"
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Account Descriptions");
  }
  verifyAddAccountHeadingandURL() {
    cy.url().should("include", this.ADD_ACCOUNT_Page_URL);
    cy.xpath(this.ADD_ACCOUNT_Heading_Page)
      .should("be.visible")
      .and("contain", "Add Account Description");
  }
  clickAddNewAccountButton() {
    cy.xpath(this.BTN_ADD_ACCOUNT).should("be.visible");
    cy.xpath(this.BTN_ADD_ACCOUNT).click();
  }
  clickSaveButton() {
    cy.get(this.BTN_SAVE).click();
  }
  clickCancelButton() {
    cy.xpath(this.BTN_CANCEL).click();
  }
  verifyPageValidation() {
    cy.get(this.VALIDATION_ACCOUNT_TYPE)
      .should("be.visible")
      .and("contain", "The Account Type field is required.");
      cy.get(this.VALIDATION_DESCRIPTION)
      .should("be.visible")
      .and("contain", "The Description field is required.");
  }
}
export default AccountDescriptionsPage;

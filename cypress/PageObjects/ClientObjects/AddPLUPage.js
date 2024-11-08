class AddPLUPage {
  Heading_Page = "//h3[normalize-space()='Adding PLU']";
  Sub_Heading_Page = "//div[normalize-space()='Details']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/PLUDetails?PLUNumber=0";
  Btn_Save_PLU = "//input[@id='btnSubmit']";
  Btn_Cancel = "//a[normalize-space()='Cancel']";
  Validation_PLU_Name = "#PLUName-error";
  Validation_Description = "#Description-error";
  verifyHeadingsAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Adding PLU")
      cy.xpath(this.Sub_Heading_Page)
      .should("be.visible")
      .and("contain", "Details");
  }
  clickSaveButton() {
    cy.xpath(this.Btn_Save_PLU).should("be.visible");
    cy.xpath(this.Btn_Save_PLU).click();
  }
  verifyValidationMessagesAppearing()
  {
    cy.get(this.Validation_PLU_Name).should("be.visible").and("contain", "The PLU Name field is required.")
    cy.get(this.Validation_Description).should("be.visible").and("contain", "The Description field is required.")
  }
  clickCancelButton() {
    cy.xpath(this.Btn_Cancel).should("be.visible");
    cy.xpath(this.Btn_Cancel).click();
  }
}
export default AddPLUPage;

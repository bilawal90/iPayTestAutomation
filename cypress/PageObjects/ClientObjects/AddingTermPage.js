class AddingTermPage {
  Heading_Page = "//h3[normalize-space()='Adding Term']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/TermDates/Details?schoolTermID=0";
  Btn_SaveTerm = "//input[@id='btnSubmit']";
  Btn_Cancel =
    "//a[normalize-space()='Cancel']";
  Validation_Msg = "span[class='has-error']";
  Validation_Name = "//span[@id='Name-error']";
  Validation_StartDate = "//span[@id='StartDate-error']";
  Validation_EndDate = "//span[@id='EndDate-error']";
  verifyHeadingandURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Adding Term");
  }
  clickSaveTermButton() {
    cy.xpath(this.Btn_SaveTerm).should("be.visible");
    cy.xpath(this.Btn_SaveTerm).click();
  }
  clickCancelButton() {
    cy.xpath(this.Btn_Cancel).should("be.visible");
    cy.xpath(this.Btn_Cancel).click();
  }
  verifyValidationMessagesAppearing()
  {
    //cy.get(this.Validation_Msg).should('have.lenght','3');
    cy.xpath(this.Validation_Name).should("be.visible");
    cy.xpath(this.Validation_StartDate).should("be.visible");
    cy.xpath(this.Validation_EndDate).should("be.visible");
  }
}
export default AddingTermPage;

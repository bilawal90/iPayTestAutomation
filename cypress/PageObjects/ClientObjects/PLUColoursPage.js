class PLUColoursPage {
  Heading_Page = "//h3[normalize-space()='PLU Colours']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Menu/PLUColours";
  Btn_Add_New_Colour = "//input[@id='btnSubmit']";
  Btn_Return = "//a[normalize-space()='Cancel']";
  validation_colour = "#BackColour-error"
  verifyHeadingAndURL() {
    cy.url().should("eq", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "PLU Colours")
    }
     verifyValidationAppearing() {
    cy.get(this.validation_colour)
      .should("be.visible")
      .and("contain", "The Colour field is required.")
    }
  clickAddNewColourButton() {
    cy.xpath(this.Btn_Add_New_Colour).should("be.visible");
    cy.xpath(this.Btn_Add_New_Colour).click();
  }
  clickReturnToMenuListButton() {
    cy.xpath(this.Btn_Return).should("be.visible");
    cy.xpath(this.Btn_Return).click();
  }
}
export default PLUColoursPage;

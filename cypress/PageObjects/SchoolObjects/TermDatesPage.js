class TermDatesPage {
  Heading_Page = "//h3[normalize-space()='Term Dates']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/TermDates";
  Btn_AddNewTerm = "//a[normalize-space()='Add New Term']";
  Btn_ReturnToEstablishment =
    "//a[normalize-space()='Return to Establishment List']";
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Term Dates");
  }
  clickAddNewTermButton() {
    cy.xpath(this.Btn_AddNewTerm).should("be.visible");
    cy.xpath(this.Btn_AddNewTerm).click();
  }
  clickReturnToEstablishmentList() {
    cy.xpath(this.Btn_ReturnToEstablishment).should("be.visible");
    cy.xpath(this.Btn_ReturnToEstablishment).click();
  }
}
export default TermDatesPage;

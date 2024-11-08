class TripDetailsPage {
  Heading_Page = "//h3[normalize-space()='Test April Fund']";
  Page_URL = "https://test.ipayimpact.co.uk/Test/Fund/ShowFundDetails?";
BTN_RETURN_TO_FUND = "//a[normalize-space()='Return to Funds']"
HEADING_DESCRIPTION = "//h4[normalize-space()='Description']"
HEADING_RELATED_DOCUMENT = "//h4[normalize-space()='Related Documents']"
HEADING_HELPERS = "//h4[normalize-space()='Helpers']"
verifyPageSubHeadings() {
  cy.xpath(this.HEADING_DESCRIPTION).should("be.visible").and("contain", "Description");
  cy.xpath(this.HEADING_RELATED_DOCUMENT).should("be.visible").and("contain", "Related Documents");
  cy.xpath(this.HEADING_HELPERS).should("be.visible").and("contain", "Helpers");
}
clickReturnToFundsButton()
{
  cy.xpath(this.BTN_RETURN_TO_FUND).click();
}
  verifyHeadingandURL() {
    cy.url().should("include", this.Page_URL);
    cy.xpath(this.Heading_Page)
      .should("be.visible")
      .and("contain", "Test April Fund");
  }
}
export default TripDetailsPage;

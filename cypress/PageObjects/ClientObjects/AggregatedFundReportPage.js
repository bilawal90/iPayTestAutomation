class AggregatedFundReportPage {
  HEADING_PAGE = "//h3[normalize-space()='Aggregated Fund Detail']";
  HEADING_REPORT = "(//div)[86]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/AggregatedFundDetail"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/AggregatedFundDetail?Parameters=444%257cFund%257cFalse%257c0"
  VALIDATION_FUND = "#Fund-error";
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_BACK_REPORT = "//img[@alt='Back']"
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  TEXTBOX_FUND = "//input[@id='Fund']"
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Aggregated Fund Detail");
}
verifyReportHeadingAndURL()
{
    cy.url().should("eq", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Aggregated Fund Detail - Fund");
}
verifyValidationMessage()
{
    cy.get(this.VALIDATION_FUND)
      .should("be.visible")
      .contains("The Fund Name Contains field is required.");
}
TypeFundName()
{
  cy.xpath(this.TEXTBOX_FUND).should("be.visible")
    cy.xpath(this.TEXTBOX_FUND).type("Fund");
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
}
}
export default AggregatedFundReportPage;

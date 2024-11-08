class TripPaymentReceivedReport {
  HEADING_REPORT = "//div[contains(text(),'Trip Payment Detail')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/TripPaymentRecieved?Parameters"
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/TripPaymentRecieved?"
  HEADING_PAGE = "//h3[normalize-space()='Trip Payment Recieved Listing']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
BTN_RUN_REPORT = "//input[@name='Submit']"
  verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Trip Payment Recieved Listing");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Trip Payment Detail");
}
clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).trigger('mouseover').click()
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).trigger('mouseover').click()
}
}
export default TripPaymentReceivedReport

class FundNotificationsPage {
  HEADING_PAGE = "//h3[normalize-space()='Fund Notifications']";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/FundNotification"
  VALIDATION_FUND = "//span[@data-valmsg-for='FundID']";
  VALIDATION_PAGE = "//span[contains(text(),'Unable to run report. Please correct the errors an')]"
  BTN_RUN_REPORT = "//input[@value='Run Report']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Notifications");
}
verifyValidationMessageOnFund()
{
    cy.xpath(this.VALIDATION_FUND)
      .should("be.visible")
      .contains("An establishment needs to be selected first, then select a fund.");
}
verifyValidationMessageOnPage()
{
    cy.xpath(this.VALIDATION_PAGE)
      .should("be.visible")
      .contains("Unable to run report. Please correct the errors and try again.");
}
clickRunReport()
{
  cy.xpath(this.BTN_RUN_REPORT).should("be.visible")
    cy.xpath(this.BTN_RUN_REPORT).click()
}
clickReturnToReportListButton()
{
  cy.xpath(this.BTN_RETURN_TO_REPORT).should("be.visible")
    cy.xpath(this.BTN_RETURN_TO_REPORT).click()
}
}
export default FundNotificationsPage;

class FundArrearsInActiveReportPage {
  HEADING_PAGE = "//h3[normalize-space()='Fund Arrears For Inactive Accounts']";
  HEADING_REPORT = "//div[contains(text(),'Fund Arrears For Inactive Accounts')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/ClientInactiveAccountSummary"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/ClientInactiveAccountSummary?Parameters=444%257c0"
  VALIDATION_FUND = "//span[@data-valmsg-for='FundID']";
  VALIDATION_PAGE = "(//span[contains(text(),'Unable to run report. Please correct the errors an')])[1]"
  BTN_RUN_REPORT = "//input[@id='btnSubmitReport']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Arrears For Inactive Accounts");
}
verifyReportHeadingAndURL()
{
    cy.url().should("eq", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Arrears For Inactive Accounts");
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
clickReturnToReportListButton()
{
  cy.xpath(this.BTN_RETURN_TO_REPORT).should("be.visible")
    cy.xpath(this.BTN_RETURN_TO_REPORT).click()
}
}
export default FundArrearsInActiveReportPage;

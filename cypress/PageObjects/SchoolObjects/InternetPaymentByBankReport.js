class InternetPaymentByBankReport {
  HEADING_PAGE = "//h3[normalize-space()='Internet Payments By Bank Account']";
  HEADING_REPORT = "//div[contains(text(),'Internet Payments By Bank Account')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsByBankAccountSchool"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/"
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Internet Payments By Bank Account");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Internet Payments By Bank Account");
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
export default InternetPaymentByBankReport;

class PaymentBetweenDatesReport {
  HEADING_PAGE = "//h3[normalize-space()='Payments Between Dates']";
  HEADING_REPORT = "//div[contains(text(),'Payments between Dates')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PaymentsBetweenDates"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/"
CHECKBOX_ALL = "//input[@id='chkAll']";
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyPageHeadingAndURL()
{
    cy.url().should("eq", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Payments Between Dates");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Payments between Dates");
}
clickAllCheckbox()
{
  cy.xpath(this.CHECKBOX_ALL).should("be.visible")
    cy.xpath(this.CHECKBOX_ALL).click()
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
export default PaymentBetweenDatesReport;

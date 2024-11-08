class PaidAccountsReport {
  HEADING_REPORT = "//div[contains(text(),'Fund Paid')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundPaid?Parameters=6763"
  BTN_BACK_REPORT = "//img[@alt='Back']";
  verifyReportHeadingAndURL()
{
    cy.url().should("eq", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Paid");
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).trigger('mouseover').click()
}
}
export default PaidAccountsReport

class PreorderFundArrearsReportPage {
  HEADING_REPORT = "//div[contains(text(),'Pre-order Fund Arrears Summary')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreorderFundArrearsSummary?Parameters=444"
  BTN_BACK_REPORT = "//img[@alt='Back']";
verifyReportHeadingAndURL()
{
    cy.url().should("eq", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Pre-order Fund Arrears Summary");
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
}
}
export default PreorderFundArrearsReportPage;

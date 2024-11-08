class AllocationsReport {
  HEADING_REPORT = "//div[contains(text(),'SAAuto1')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundAllocations?Parameters=6763"
  BTN_BACK_REPORT = "//img[@alt='Back']";
  verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("SAAuto1");
}
clickReportBackButton()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).trigger('mouseover').click()
}
}
export default AllocationsReport

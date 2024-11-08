class FundReconciliationReport {
  HEADING_PAGE = "//h3[normalize-space()='Internet Payments By Bank Account']";
  HEADING_REPORT= "//div[contains(text(),'Internet Payments By Bank Account')]";
  URL_PAGE =  "https://test.ipayimpact.co.uk/Test/Report/PaymentsByBankAccountSchool"
    URL_REPORT =  "https://test.ipayimpact.co.uk/Test/Reports/PaymentsByBankAccountSchool?Parameters="
BTN_RUN_REPORT = "//input[@name='Submit']"
BTN_BACK_REPORT = "img[alt='Back']"
verifySchoolPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Internet Payments By Bank Account");
}
verifySchoolReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Internet Payments By Bank Account");
}
clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).click();
}
clickBackReportButton()
{
  cy.get(this.BTN_BACK_REPORT).click();
}
}
export default FundReconciliationReport

class FundReconciliationReport {
  HEADING_PAGE = "//h3[normalize-space()='Fund Account Reconciliation']";
  HEADING_REPORT= "//div[contains(text(),'Fund Account Reconciliation')]";
  URL_PAGE =  "https://test.ipayimpact.co.uk/Test/Report/FundAccountReconciliation"
    URL_REPORT =  "https://test.ipayimpact.co.uk/Test/Reports/FundAccountReconciliation?Parameters="
BTN_RUN_REPORT = "//input[@name='Submit']"
BTN_BACK_REPORT = "img[alt='Back']"
DROPDOWN_BANK_ACCOUNT = "#BankDetailID"
verifySchoolPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Account Reconciliation");
}
verifySchoolReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Account Reconciliation");
}
clickRunReportButton()
{
  cy.xpath(this.BTN_RUN_REPORT).click();
}
clickBackReportButton()
{
  cy.get(this.BTN_BACK_REPORT).click();
}
SelectBankAccount() {
  cy.get(this.DROPDOWN_BANK_ACCOUNT).select("****1401 - 13-03-14 - RBS - Client").should("have.value", "1083");
}
}
export default FundReconciliationReport

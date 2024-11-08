class FundExpenditureReport {
  HEADING_PAGE = "//div[contains(text(),'Fund Expenditure')]";
  HEADING_REPORT = "//div[contains(text(),'Fund Expenditure')]";
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundExpenditureForFund"
URL_PAGE_SCHOOL = "https://test.ipayimpact.co.uk/Test/Report/FundsExpenditureForSchool"
URL_REPORT_SCHOOL = "https://test.ipayimpact.co.uk/Test/Report/FundsExpenditureForSchool"
HEADING_SCHOOL_REPORT = "//div[contains(text(),'Fund Expenditure')]";
  BTN_BACK_REPORT = "//img[@alt='Back']";
  BTN_RUN_REPORT = "input[value='Run Report']"
  HEADING_PAGE = "//h3[normalize-space()='Funds Expenditure']"
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Expenditure");
}
verifySchoolPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE_SCHOOL);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Funds Expenditure");
}
verifySchoolReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT_SCHOOL);
    cy.xpath(this.HEADING_SCHOOL_REPORT)
      .should("be.visible")
      .contains("Fund Expenditure");
}
clickRunReportButton()
{
  cy.get(this.BTN_RUN_REPORT).should("be.visible")
    cy.get(this.BTN_RUN_REPORT).click()
}
clickBackButtonOnReport()
{
  cy.xpath(this.BTN_BACK_REPORT).should("be.visible")
    cy.xpath(this.BTN_BACK_REPORT).click()
}
}
export default FundExpenditureReport

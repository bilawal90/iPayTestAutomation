class FundArrearsReport {
  HEADING_PAGE = "//h3[normalize-space()='Fund Arrears']";
  HEADING_REPORT= "//div[contains(text(),'Fund Arrears')]";
  URL_PAGE_SCHOOL =  "https://test.ipayimpact.co.uk/Test/Report/FundArrears"
    URL_REPORT_SCHOOL =  "https://test.ipayimpact.co.uk/Test/Reports/FundArrears?Parameters="
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Fund/FundArrears"
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/FundArrearsForFund?Parameters="
BTN_RUN_REPORT = "//input[@name='Submit']"
BTN_BACK_REPORT = "img[alt='Back']"
verifySchoolPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE_SCHOOL);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Arrears");
}
verifySchoolReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT_SCHOOL);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Arrears");
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Fund Arrears");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Fund Arrears");
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
export default FundArrearsReport

class DailyPreOrderSummary {
  HEADING_PAGE = "//h3[normalize-space()='Daily Pre-order Summary']";
  HEADING_REPORT = "//div[contains(text(),'Daily Pre-order Summary')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PreorderClassListingDailySummary?fundID="
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreorderClassListingDailySummary?Parameters="
  BTN_RUN_REPORT = "//input[@name='Submit']";
  BTN_RETURN_TO_REPORT = "//a[normalize-space()='Return to Reports List']";
  BTN_BACK_REPORT = "//img[@alt='Back']";
DROPDOWN_YEAR = "#SelectedYearClass"
DROPDOWN_CLASS = "#SelectedClass"
LINK_DASHBOARD = "//b[normalize-space()='Click here to check it out?']"
selectYear() {
  cy.get(this.DROPDOWN_YEAR).select('N/A - N/A')
}
selectClass() {
  cy.get(this.DROPDOWN_CLASS).select('N/A')
}
verifyPageHeadingAndURL()
{
    cy.url().should("include", this.URL_PAGE);
    cy.xpath(this.HEADING_PAGE)
      .should("be.visible")
      .contains("Daily Pre-order Summary");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Daily Pre-order Summary");
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
clickPreOrderDashboardLink()
{
  cy.xpath(this.LINK_DASHBOARD).click()
}
}
export default DailyPreOrderSummary;

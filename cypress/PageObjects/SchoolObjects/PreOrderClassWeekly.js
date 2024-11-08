class PreOrderClassWeekly {
  HEADING_PAGE = "//h3[normalize-space()='Pre-order Class Listing Weekly']";
  HEADING_REPORT = "//div[contains(text(),'Pre-order Class Listing')]";
  URL_PAGE = "https://test.ipayimpact.co.uk/Test/Report/PreorderClassListing?fundID="
  URL_REPORT = "https://test.ipayimpact.co.uk/Test/Reports/PreorderClassListing?Parameters="
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
      .contains("Pre-order Class Listing Weekly");
}
verifyReportHeadingAndURL()
{
    cy.url().should("include", this.URL_REPORT);
    cy.xpath(this.HEADING_REPORT)
      .should("be.visible")
      .contains("Pre-order Class Listing");
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
export default PreOrderClassWeekly;
